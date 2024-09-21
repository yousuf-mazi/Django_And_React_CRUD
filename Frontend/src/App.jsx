import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import Show_users from "./components/Show_users";
import { UsersContext } from "./Context/UserContext";
import Update_Add from "./components/Update_Add";

function App() {
  const [UserForm, setUserForm] = useState([]);
  const [isUpdate, setisUpdate] = useState(false);
  const [updateid, setupdateid] = useState();

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    const response = await axios.get("http://127.0.0.1:8000/users/");
    setUserForm(response.data);
  };

  const createItem = async (CreateUserForm) => {
    await axios.post("http://127.0.0.1:8000/users/", CreateUserForm);
    fetchItems();
  };

  const deleteItem = async (id) => {
    await axios.delete(`http://127.0.0.1:8000/users/${id}/`);
    fetchItems();
  };

  const update = async (id, UpdateUsersForm) => {
    await axios.put(`http://127.0.0.1:8000/users/${id}/`, UpdateUsersForm);
    fetchItems();
  };

  return (
    <div key={updateid} className="container">
      <UsersContext.Provider
        value={{
          UserForm,
          setUserForm,
          isUpdate,
          setisUpdate,
          createItem,
          deleteItem,
          update,
          updateid,
          setupdateid,
        }}
      >
        <Update_Add />
        <Show_users />
      </UsersContext.Provider>
    </div>
  );
}

export default App;
