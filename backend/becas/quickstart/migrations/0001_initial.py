# Generated by Django 3.2.13 on 2022-05-23 21:41

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Beca',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nombre', models.CharField(max_length=15)),
                ('categoria', models.CharField(max_length=15)),
                ('porcentaje_financiacion', models.IntegerField(default=20)),
                ('pais', models.CharField(max_length=15)),
                ('universidad', models.CharField(max_length=15)),
                ('requerimiento', models.CharField(max_length=100)),
            ],
        ),
    ]
