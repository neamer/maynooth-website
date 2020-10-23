from django.urls import path

from . import api


urlpatterns = [
    path('products/', api.ProductList.as_view(), name="product-list"),
    path('product/',
         api.ProductDetail.as_view(), name="product-detail"),
]
