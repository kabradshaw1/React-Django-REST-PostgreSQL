from rest_framework import serializers
from social.post.models import Post

class PostSerializer(serializers.ModelSerializer):
  # I'm not real sure what this serializer does
  response = serializers.StringRelatedField(many=True)

  class Meta:
    model = Post
    fields = ['id', 'postText', 'user_id', 'created', 'updated']  

