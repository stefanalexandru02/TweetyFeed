from backend.models import Tweet
from rest_framework import viewsets, permissions
from backend.serializers import TweetSerializer


class TweetViewSet(viewsets.ModelViewSet):
    queryset = Tweet.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = TweetSerializer
