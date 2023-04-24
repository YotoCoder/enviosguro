from rest_framework import viewsets

from .models import Contacto

from .serializers import ContactoSerializer

class ContactoViewSet(viewsets.ModelViewSet):
    queryset = Contacto.objects.all()
    serializer_class = ContactoSerializer
    http_method_names = ['post']