from django.shortcuts import render
from rest_framework import viewsets
from .serializers import UserSerializer
from .models import User

class UserViewSet(viewsets.ModelViewSet):
  serializer_class = UserSerializer
 
  def get_queryset(self):
    return User.objects.all()
