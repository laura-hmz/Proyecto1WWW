# Generated by Django 3.2.13 on 2022-05-25 05:58

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('quickstart', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='beca',
            name='categoria',
            field=models.CharField(max_length=100),
        ),
        migrations.AlterField(
            model_name='beca',
            name='nombre',
            field=models.CharField(max_length=100),
        ),
        migrations.AlterField(
            model_name='beca',
            name='pais',
            field=models.CharField(max_length=100),
        ),
        migrations.AlterField(
            model_name='beca',
            name='porcentaje_financiacion',
            field=models.IntegerField(default=100),
        ),
        migrations.AlterField(
            model_name='beca',
            name='requerimiento',
            field=models.CharField(max_length=600),
        ),
        migrations.AlterField(
            model_name='beca',
            name='universidad',
            field=models.CharField(max_length=100),
        ),
    ]
