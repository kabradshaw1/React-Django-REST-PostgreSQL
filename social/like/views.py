from rest_framework import viewsets
from social.like.serializers import LikeSerializers
from social.common import Assets

class LikeViewSet(viewsets.ModelViewSet):
  serializer_class = LikeSerializers

  def get_queryset(self):
    return Like.objects.all

# I'm not really sure how to import the Assets class here.  I'm not really sure
# if I actually need to because that method is to fix an issue I haven't actually 
# had yet.  I probably do need to learn how to give this file access to that class