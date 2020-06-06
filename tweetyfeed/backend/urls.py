from rest_framework import routers
from backend.api import TweetViewSet


router = routers.DefaultRouter()
router.register('tweets', TweetViewSet, 'tweets')

urlpatterns = router.urls
