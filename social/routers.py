from rest_framework.routers import SimpleRouter

from social.views import PostViewSet, ResponseViewSet
from social.user.views import UserViewSet
from social.auth.views import LoginViewSet, RegistrationViewSet, RefreshViewSet

routes = SimpleRouter()

# AUTHENTICATION
routes.register(r'auth/login', LoginViewSet, basename='auth-login')
routes.register(r'auth/register', RegistrationViewSet, basename='auth-register')
routes.register(r'auth/refresh', RefreshViewSet, basename='auth-refresh')

# USER
routes.register(r'user', UserViewSet, basename='user')

# post
routes.register(r'post', PostViewSet, basename='post')
routes.register(r'response', ResponseViewSet, basename='response')

urlpatterns = [
  *routes.urls
]