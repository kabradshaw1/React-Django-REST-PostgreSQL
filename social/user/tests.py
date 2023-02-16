from django.test import TestCase
from social.user.model import User, UserManager

class UserTestCase(TestCase):
  def setUp(self):
    User.objects.create(email="test@mail.com", is_active="True", is_staff="True",)
