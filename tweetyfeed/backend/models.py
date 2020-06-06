from django.db import models


class Tweet(models.Model):
    text = models.TextField(blank=True)
    name = models.CharField(max_length=100)
    created_at = models.DateTimeField(auto_now_add=True)
