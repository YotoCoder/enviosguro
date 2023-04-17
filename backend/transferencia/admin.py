from django.contrib import admin
from .models import Cliente, Cuenta, Transferencia
from django.utils.html import format_html
# Register your models here.

# @admin.register(Transferencia)
# class TransferenciaAdmin(admin.ModelAdmin):
#     list_display = ('nombre_cliente','telefono_cliente', 'email_cliente', 'nombre_beneficiario', 'nombre_banco', 'cuenta_beneficiario', 'importe', 'tasa', 'total_bs', 'estado')
#     list_filter = ('estado',)

#     def total_bs(self, obj):
#         return format_html(f'<span style="color: #000000;">{obj.total}Bs</span>')

@admin.register(Cliente)
class ClienteAdmin(admin.ModelAdmin):
    list_display = ('nombre', 'telefono', 'email')
    list_filter = ('nombre', 'telefono', 'email')

@admin.register(Cuenta)
class CuentaAdmin(admin.ModelAdmin):
    list_display = ('cliente', 'nombre_banco', 'nombre', 'cedula', 'numero_cuenta')
    list_filter = ('nombre_banco', 'cliente__nombre',)

    # campo de busqueda por cedula con un label personalizado 
    search_fields = ('cedula', 'nombre')
    

@admin.register(Transferencia)
class TransferenciaAdmin(admin.ModelAdmin):
    list_display = ('cliente', 'cuenta', 'importe', 'tasa', 'total_bs', 'estado')
    list_filter = ('estado', 'cuenta__nombre_banco')

    # campo de busqueda por cedula con un label personalizado 
    search_fields = ('cliente__nombre', 'cuenta__nombre', 'cuenta__cedula')

    def total_bs(self, obj):
        # formatear el monto total en formato de moneda ej: 1.000.000,00 Bs
        return format_html(f'<span style="color: #000000;">{obj.total} \ Bs</span>')