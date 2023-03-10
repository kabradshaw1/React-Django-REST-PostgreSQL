from rest_framework import serializers
from social.response.models import Response

class ResponseSerializer(serializers.ModelSerializer):
  post = serializers.StringRelatedField()
    
  class Meta:
    model = Response
    fields = ['id', 'responseText', 'user_id', 'created', 'updated', 'post']