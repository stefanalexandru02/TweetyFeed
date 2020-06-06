from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    # path('admin/', admin.site.urls),
    path('api/', include('backend.urls')),
    path('api/', include('accounts.urls')),

    # Add all react paths here
    path('', include('frontend.urls')),
    path('user/login', include('frontend.urls')),
    path('about', include('frontend.urls'))
]
