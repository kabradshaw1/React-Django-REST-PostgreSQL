from django.views import View
from django.http import HttpResponse, HttpResponseNotFound
import os

# This was added to help prevent an issue when deploying on heroku
class Assets(View):

    def get(self, _request, filename):
        path = os.path.join(os.path.dirname(__file__), 'static', filename)

        if os.path.isfile(path):
            with open(path, 'rb') as file:
                return HttpResponse(file.read(), content_type='application/javascript')
        else:
            return HttpResponseNotFound()
# End of the code added to prevent an issue when deploying to heroku