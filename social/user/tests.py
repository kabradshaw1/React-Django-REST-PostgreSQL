from django.test import TestCase
from social.user.model import User, UserManager

class UserTestCase(TestCase):
  def setUp(self):
    # I need to figure out how to create tests for objects that are inherited.  
    # Could be possible that the best approach is to think of this test as if I
    # I can't already see what the unit I'm attempting to test looks like finished.
    User.objects.create(email="test@mail.com", is_active="True", is_staff="True", object='needs help')

  def test_user(self):
    email = User.objects.get(name="test@mail.com")
    is_active = User.objects.get(name="True")
    