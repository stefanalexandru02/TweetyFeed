from django.db import models
from django.contrib.auth.models import User


class Tweet(models.Model):
    text = models.TextField(blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    owner = models.ForeignKey(
        User, related_name="tweets", on_delete=models.CASCADE, null=True)
