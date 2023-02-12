from django.db import models

class Menu(models.Model):
    post = models.CharField(max_length=255)
    username = models.TextField()
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name