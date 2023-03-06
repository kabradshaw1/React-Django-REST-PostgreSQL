from rest_framework import viewsets
from social.post.serializers import PostSerializer
from social.common import Assets
from social.post.models import Post

class PostViewSet(viewsets.ModelViewSet):
    serializer_class = PostSerializer

    def get_queryset(self):
        return Post.objects.all()

# I'm not really sure how to import the Assets class here.  I'm not really sure
# if I actually need to because that method is to fix an issue I haven't actually 
# had yet.  I probably do need to learn how to give this file access to that class