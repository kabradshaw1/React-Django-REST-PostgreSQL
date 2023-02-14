from rest_framework import serializers
from social.like.models import Like

class LikeSerializer(serializers.ModelSerializer):
  like = serializers.StringRelatedField(many=True)

  class Meta:
    model = Like
    fields = ['id', 'post_id', 'response_id']