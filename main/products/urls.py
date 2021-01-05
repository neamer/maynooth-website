from django.urls import path

from . import api


urlpatterns = [
    path('products/search/', api.ProductSearchResults.as_view(),
         name="products-search"),
    path('products/', api.ProductList.as_view(), name="product-list"),
    path('product/',
         api.ProductDetail.as_view(), name="product-detail"),
    path('product-group/',
         api.ProductSet.as_view(), name="product-set"),
]
