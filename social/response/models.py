from django.db import models
from social.post.models import Post
from social.user.models import User

class Response(models.Model):
    responseText = models.CharField(max_length=255)
    post = models.ForeignKey(Post, on_delete=models.CASCADE)
    username = models.ForeignKey(User, on_delete=models.CASCADE)
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)
    
    def __str__(self):
        return self.name
