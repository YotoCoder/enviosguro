# Generated by Django 4.2 on 2023-04-16 08:41

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('transferencia', '0004_alter_cuenta_nombre_banco'),
    ]

    operations = [
        migrations.RenameField(
            model_name='cuenta',
            old_name='nombre_cuenta',
            new_name='nombre',
        ),
    ]