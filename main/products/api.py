from django.http import Http404

from rest_framework import generics
from rest_framework.response import Response
from rest_framework import status

from .models import Product
from .serializers import ProductSerializer
from .pagination import SmallResultsSetPagination


class ProductList(generics.ListAPIView):
    """
    List all products.
    """
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    pagination_class = SmallResultsSetPagination
