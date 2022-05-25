from django.db import models

# Create your models here.
class Beca(models.Model):
    nombre=models.CharField(max_length=15)
    categoria=models.CharField(max_length=15)
    porcentaje_financiacion=models.IntegerField(default=20)
    pais=models.CharField(max_length=15)
    universidad=models.CharField(max_length=15)
    requerimiento=models.CharField(max_length=100)

    def __str__(self):
        return self.nombre
