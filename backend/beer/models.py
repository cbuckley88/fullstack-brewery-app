from django.db import models


class Beer(models.Model):
    title = models.CharField(max_length=120)
    description = models.TextField()
    abv = models.DecimalField(max_digits=5, decimal_places=2)
    ibu = models.DecimalField(max_digits=5, decimal_places=2)
    image_url = models.CharField(max_length=500)
    quantity = models.IntegerField()
    price = models.DecimalField(max_digits=5, decimal_places=2)

    def _str_(self):
        return self.title