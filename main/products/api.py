from django.http import Http404
from django.db.models import Q

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


class ProductSearchResults(APIView):
    """
    Retrieve a list of products based on the input string
    """

    def get_object(self, searchInput):
        try:
            return Product.objects.filter(Q(name__contains=searchInput) | Q(short_desc__contains=searchInput) | Q(detail_desc__contains=searchInput))
        except Product.DoesNotExist:
            print('not found')
            raise Http404

    def get(self, request, format=None):
        searchInput = request.query_params.dict()["searchInput"]
        products = self.get_object(searchInput)
        paginator = StandardResultsSetPagination()
        results = paginator.paginate_queryset(products, request)
        serializer = ProductSerializer(results, many=True)

        next_page = paginator.get_next_link()

        return Response({"count": products.count(), "next": next_page, "results": serializer.data})


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
        name = request.query_params.dict()["productName"]
        product = self.get_object(name)
        serializer = ProductSerializer(product)
        return Response(serializer.data)
