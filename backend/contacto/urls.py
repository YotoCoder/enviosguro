from django.urls import path, include
from rest_framework import routers

from .views import ContactoViewSet

router = routers.DefaultRouter()
router.register(r'contacto', ContactoViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
