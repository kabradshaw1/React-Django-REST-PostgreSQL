from rest_framework import serializers
from social.models import Response, Post

class PostSerializer(serializers.ModelSerializer):
    response = serializers.StringRelatedField(many=True)

    class Meta:
        model = Post
        fields = ['id', 'postText', 'username', 'created', 'updated', 'response']  

class ResponseSerializer(serializers.ModelSerializer):
    post = serializers.StringRelatedField()
    
    class Meta:
        model = Response
        fields = ['id', 'responseText', 'username', 'created', 'updated', 'post']