from django.shortcuts import render
from rest_framework import viewsets
from .serializers import BeerSerializer
from .models import Beer


# Create your views here.
class BeerViewSet(viewsets.ModelViewSet):
    serializer_class = BeerSerializer
    queryset = Beer.objects.all()