from rest_framework import viewsets
from social.response.serializers import ResponseSerializer
from social.common import Assets


class ResponseViewSet(viewsets.ModelViewSet):
    serializer_class = ResponseSerializer()

    def get_queryset(self):
        return Response.objects.all()

# I'm not really sure how to import the Assets class here.  I'm not really sure
# if I actually need to because that method is to fix an issue I haven't actually 
# had yet.  I probably do need to learn how to give this file access to that class