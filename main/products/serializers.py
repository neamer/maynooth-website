from rest_framework import serializers

from .models import Color, Product, Picture, ProductGroup


class ColorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Color
        fields = ['name', 'hexa']


class PictureSerializer(serializers.ModelSerializer):
    class Meta:
        model = Picture
        fields = ['picture']


class ProductSerializer(serializers.ModelSerializer):
    colors = ColorSerializer(read_only=True, many=True)
    pictures = serializers.StringRelatedField(many=True)

    class Meta:
        model = Product
        fields = ['name', 'price', 'short_desc', 'detail_desc',
                  'colors', 'category', 'in_stock', 'date_added', 'pictures']


class ProductGroupSerializer(serializers.ModelSerializer):
    products = ProductSerializer(read_only=True, many=True)

    class Meta:
        model = ProductGroup
        fields = ['products']
