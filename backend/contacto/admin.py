from django.contrib import admin
from .models import Contacto
# Register your models here.

@admin.register(Contacto)
class ContactoAdmin(admin.ModelAdmin):
    list_display = ('nombre', 'telefono', 'email', 'mensaje')
    list_filter = ('nombre', 'telefono', 'email', 'mensaje')
    search_fields = ('nombre', 'telefono', 'email', 'mensaje')
    ordering = ('nombre', 'telefono', 'email', 'mensaje')
