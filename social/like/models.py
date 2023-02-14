from django.db import models
from social.post.models import Post
from social.response.models import Response

class Like(models.Model):
    post = models.ForeignKey(Post, on_delete=models.CASCADE)
    response = models.ForeignKey(Response, on_delete=models.CASCADE)
