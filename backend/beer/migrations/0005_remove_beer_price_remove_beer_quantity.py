# Generated by Django 5.0 on 2023-12-07 13:57

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('beer', '0004_alter_beer_price_alter_beer_quantity'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='beer',
            name='price',
        ),
        migrations.RemoveField(
            model_name='beer',
            name='quantity',
        ),
    ]
