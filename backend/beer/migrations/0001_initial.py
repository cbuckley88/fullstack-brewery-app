# Generated by Django 5.0 on 2023-12-07 13:37

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='ToBeerdo',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=120)),
                ('description', models.TextField()),
                ('abv', models.DecimalField(decimal_places=2, max_digits=5)),
                ('ibu', models.DecimalField(decimal_places=2, max_digits=5)),
                ('image_url', models.CharField(max_length=500)),
                ('quantity', models.IntegerField()),
                ('price', models.DecimalField(decimal_places=2, max_digits=5)),
            ],
        ),
    ]
