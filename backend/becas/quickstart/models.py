from django.db import models

# Create your models here.
class Beca(models.Model):
    nombre=models.CharField(max_length=100)
    categoria=models.CharField(max_length=100)
    porcentaje_financiacion=models.IntegerField(default=100)
    pais=models.CharField(max_length=100)
    universidad=models.CharField(max_length=100)
    requerimiento=models.CharField(max_length=600)

    def __str__(self):
        return self.nombre
