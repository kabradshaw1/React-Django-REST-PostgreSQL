from django.db import models
from social.user.models import User

class Post(models.Model):
    postText = models.CharField(max_length=255)
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)
    user_id = models.ForeignKey(User, default="", on_delete=models.DO_NOTHING)

    def __str__(self):
        return self.name
