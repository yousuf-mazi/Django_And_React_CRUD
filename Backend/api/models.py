from django.db import models

# Create your models here.
class User (models.Model):
    username = models.CharField(max_length=30)
    email = models.EmailField()
    created_at = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return f"Name : {self.username}  Email : {self.email}"

    
    
    