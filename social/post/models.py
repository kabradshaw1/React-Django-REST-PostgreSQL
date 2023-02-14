from django.db import models
from social.user.models import User

class Post(models.Model):
    postText = models.CharField(max_length=255)
    username = models.TextField()
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)
    user = models.ForeignKey(User, on_delete=models.DO_NOTHING)

    def __str__(self):
        return self.name
