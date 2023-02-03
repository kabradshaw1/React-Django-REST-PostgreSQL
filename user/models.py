from django.db import models

class User(models.Model):
  email = models.CharField(max_length=15)
  password = models.CharField(max_length=15)
  created = models.DateTimeField(auto_now_add=True)

  def __str__(self):
    return self.email