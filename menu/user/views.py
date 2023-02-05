from rest_framework import viewsets
from .serializer import UserSerializer
from .models import User
from rest_framework import filters
from rest_framework.permissions import IsAuthenticated

class UserView(viewsets.ModelViewSet):
  http_method_names = ['get']
  serializer_class = UserSerializer
  permission_classes = (IsAuthenticated,)
  filter_backends = [filters.OrderingFilter]
  ordering_fields = ['updated']
  ordering = ['-updated']