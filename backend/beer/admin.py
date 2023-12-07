from django.contrib import admin
from .models import Beer


# Register your models here.
class BeerAdmin(admin.ModelAdmin):
    list_display = (
        'title', 
        'description', 
        'abv', 
        'ibu', 
        'image_url', 
        'quantity', 
        'price',
        )


# Register your models here.
admin.site.register(Beer, BeerAdmin)