from django.urls import path

from api.views import UsersListCreateApiVIew, UsesrDetailDeleteUpdateView, index
from django.conf import settings

urlpatterns = [
    path('users/',UsersListCreateApiVIew.as_view(),name='Users'),
    path('users/<pk>/',UsesrDetailDeleteUpdateView.as_view()),
    path('', index),
]
