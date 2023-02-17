from django.test import TestCase
from social.post.models import Post
from social.response.models import Response
from social.like.models import Like
from social.user.models import User

class TestPostModels(TestCase):
  def test_post_has_many_responses(self):
    Post = Book.objects.create(postText='This is a test post', username='Kyle', )