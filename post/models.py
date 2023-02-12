from django.db import models

class Post(models.Model):
    postText = models.CharField(max_length=255)
    username = models.TextField()
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name

class Response(models.Model):
    responseText = models.CharField(max_length=255)
    post = models.ForeignKey(Post, on_delete=models.CASCADE)

class Like(models.Model):
    post = models.ForeignKey(Post, on_delete=models.CASCADE)

