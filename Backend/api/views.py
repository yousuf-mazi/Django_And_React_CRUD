from rest_framework import generics
from .models import User
from .serializers import UserSerializers
from django.http import HttpResponseRedirect
from django.urls import reverse




class UsersListCreateApiVIew(generics.ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializers


class UsesrDetailDeleteUpdateView(generics.RetrieveUpdateDestroyAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializers


def index(request):
    return HttpResponseRedirect (reverse('Users'))