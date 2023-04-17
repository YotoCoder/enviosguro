from django.db import models
from django.db.models.signals import post_save
from django.dispatch import receiver
from django.core.mail import send_mail
from django.conf.global_settings import EMAIL_HOST_USER
from django.conf import settings


# Create your models here.

class Contacto(models.Model):
    nombre = models.CharField(max_length=50)
    telefono = models.CharField(max_length=50)
    email = models.EmailField()
    mensaje = models.TextField()

    def __str__(self):
        return self.nombre
    

@receiver(post_save, sender=Contacto)
def nuevo_contacto(sender, instance, created, **kwargs):
    if created:
        send_mail(
        'Envios Guro SAC',
        instance.nombre  + ' ' + instance.telefono + ' ' + instance.email + ' ' + instance.mensaje,
        EMAIL_HOST_USER,
        ['yotoelectronics@gmail.com'],
        fail_silently=False,
        )