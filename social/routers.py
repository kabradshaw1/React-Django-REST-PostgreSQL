from rest_framework.routers import SimpleRouter
from social.response.views import ResponseViewSet
from social.like.views import LikeViewSet
from social.post.views import PostViewSet
from social.user.views import UserViewSet
from social.auth.views import LoginViewSet, RegistrationViewSet, RefreshViewSet

routes = SimpleRouter()

# AUTHENTICATION
routes.register(r'auth/login', LoginViewSet, basename='auth-login')
routes.register(r'auth/register', RegistrationViewSet, basename='auth-register')
routes.register(r'auth/refresh', RefreshViewSet, basename='auth-refresh')

routes.register(r'user', UserViewSet, basename='user')
routes.register(r'post', PostViewSet, basename='post')
routes.register(r'response', ResponseViewSet, basename='response')
routes.register(r'like', LikeViewSet, basename='like')

urlpatterns = [
  *routes.urls
]