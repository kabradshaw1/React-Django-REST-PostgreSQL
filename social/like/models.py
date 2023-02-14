from django.db import models

class Like(models.Model):
    post = models.ForeignKey(Post, on_delete=models.CASCADE)
    response = models.ForeignKey(Response, on_delete=models.CASCADE)
