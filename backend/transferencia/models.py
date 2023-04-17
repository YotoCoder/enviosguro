from django.db import models
from django.db.models.signals import post_save
from django.dispatch import receiver
from django.core.mail import send_mail
from django.conf.global_settings import EMAIL_HOST_USER
from django.conf import settings
from .choices import BANCOS, ESTADO
# Create your models here.


class Cliente(models.Model):
    nombre = models.CharField(max_length=50)
    telefono = models.CharField(max_length=50)
    email = models.EmailField()

    def __str__(self):
        return self.nombre


class Cuenta(models.Model):
    cliente = models.ForeignKey(Cliente, on_delete=models.CASCADE)

    nombre_banco = models.CharField(max_length=50, choices=BANCOS)
    nombre = models.CharField(max_length=50)
    cedula = models.CharField(max_length=50)
    numero_cuenta = models.CharField(max_length=50)

    def __str__(self):
        return self.nombre + ' - ' + self.nombre_banco + ' - ' + self.cedula + ' - ' + self.numero_cuenta


class Transferencia(models.Model):
    cliente = models.ForeignKey(Cliente, on_delete=models.CASCADE)

    cuenta = models.ForeignKey(Cuenta, on_delete=models.CASCADE)

    importe = models.FloatField()
    tasa = models.FloatField()
    total = models.FloatField(blank=True, null=True)

    estado = models.IntegerField(choices=ESTADO, default=0)

    def __str__(self):
        return self.cliente.nombre

    def save(self, *args, **kwargs):
        self.total = self.importe * self.tasa
        super(Transferencia, self).save(*args, **kwargs)


@receiver(post_save, sender=Transferencia)
def nuevo_contacto(sender, instance, created, **kwargs):
    if created:
        send_mail(
            'Envios Guro SAC',
            'Haz recibido un nuevo pedido de transferencia',
            EMAIL_HOST_USER,
            ['yotoelectronics@gmail.com'],
            fail_silently=False,
        )
