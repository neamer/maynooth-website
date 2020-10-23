from django.http import Http404

from rest_framework import generics
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from .models import Product
from .serializers import ProductSerializer
from .pagination import SmallResultsSetPagination, StandardResultsSetPagination


class ProductList(generics.ListAPIView):
    """
    List all products.
    """
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    pagination_class = StandardResultsSetPagination


class ProductDetail(APIView):
    """
    Retrieve a product instance from its name.
    """

    def get_object(self, productName):
        try:
            return Product.objects.filter(name=productName).first()
        except Product.DoesNotExist:
            print('not found')
            raise Http404

    def get(self, request, format=None):
        print(request.query_params.dict()["productName"])
        name = request.query_params.dict()["productName"]
        product = self.get_object(name)
        serializer = ProductSerializer(product)
        return Response(serializer.data)
