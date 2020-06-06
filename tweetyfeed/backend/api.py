from backend.models import Tweet
from rest_framework import viewsets, permissions
from backend.serializers import TweetSerializer


class TweetViewSet(viewsets.ModelViewSet):
    # queryset = Tweet.objects.all()
    permission_classes = [
        permissions.IsAuthenticated
    ]

    serializer_class = TweetSerializer

    def get_queryset(self):
        return self.request.user.tweets.all()

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)
