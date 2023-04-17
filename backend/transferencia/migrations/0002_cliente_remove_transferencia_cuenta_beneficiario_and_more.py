# Generated by Django 4.2 on 2023-04-16 07:43

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('transferencia', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Cliente',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nombre', models.CharField(max_length=50)),
                ('telefono', models.CharField(max_length=50)),
                ('email', models.EmailField(max_length=254)),
            ],
        ),
        migrations.RemoveField(
            model_name='transferencia',
            name='cuenta_beneficiario',
        ),
        migrations.RemoveField(
            model_name='transferencia',
            name='email_cliente',
        ),
        migrations.RemoveField(
            model_name='transferencia',
            name='nombre_banco',
        ),
        migrations.RemoveField(
            model_name='transferencia',
            name='nombre_beneficiario',
        ),
        migrations.RemoveField(
            model_name='transferencia',
            name='nombre_cliente',
        ),
        migrations.RemoveField(
            model_name='transferencia',
            name='telefono_cliente',
        ),
        migrations.AlterField(
            model_name='transferencia',
            name='total',
            field=models.FloatField(blank=True, null=True),
        ),
        migrations.CreateModel(
            name='Cuenta',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nombre_banco', models.CharField(max_length=50)),
                ('numero_cuenta', models.CharField(max_length=50)),
                ('tipo_cuenta', models.CharField(max_length=50)),
                ('cliente', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='transferencia.cliente')),
            ],
        ),
        migrations.AddField(
            model_name='transferencia',
            name='cliente',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, to='transferencia.cliente'),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='transferencia',
            name='cuenta',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, to='transferencia.cuenta'),
            preserve_default=False,
        ),
    ]
