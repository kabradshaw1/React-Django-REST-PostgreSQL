from rest_framework import serializers
from post.models import Post

class PostSerializer(serializers.ModelSerializer):
    response = serializers.StringRelatedField(many=true)

    class Meta:
        model = Post
        fields = ['id', 'postText', 'username', 'created', 'updated', 'response']  