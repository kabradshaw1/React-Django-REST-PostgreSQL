from rest_framework import serializers
from social.post.models import Post

class PostSerializer(serializers.ModelSerializer):
  response = serializers.StringRelatedField(many=True)

  class Meta:
    model = Post
    fields = ['id', 'postText', 'username', 'created', 'updated']  

