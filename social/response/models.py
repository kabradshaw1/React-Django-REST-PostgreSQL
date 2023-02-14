from django.db import models

class Response(models.Model):
    responseText = models.CharField(max_length=255)
    post = models.ForeignKey(Post, on_delete=models.CASCADE)
    username = models.TextField()
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)
    
    def __str__(self):
        return self.name
