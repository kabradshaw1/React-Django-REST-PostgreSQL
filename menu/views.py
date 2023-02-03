from rest_framework import viewsets
from menu.models import Menu
from menu.serializers import MenuSerializer
from django.views import View
from django.http import HttpResponse, HttpResponseNotFound
import os

class MenuViewSet(viewsets.ModelViewSet):
    serializer_class = MenuSerializer

    def get_queryset(self):
        return Menu.objects.all()

class Assets(View):

    def get(self, _request, filename):
        path = os.path.join(os.path.dirname(__file__), 'static', filename)

        if os.path.isfile(path):
            with open(path, 'rb') as file:
                return HttpResponse(file.read(), content_type='application/javascript')
        else:
            return HttpResponseNotFound()