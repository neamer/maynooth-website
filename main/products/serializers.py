from rest_framework import serializers

from .models import Color, Product, ProductPicture


class ColorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Color
        fields = ['name', 'hexa']


class ProductPictureSerializer(serializers.ModelSerializer):
    class Meta:
        fields = ['picture']


class ProductSerializer(serializers.ModelSerializer):
    colors = ColorSerializer(read_only=True, many=True)
    picture = serializers.PrimaryKeyRelatedField(
        queryset=ProductPicture.objects.all(), many=True)

    class Meta:
        model = Product
        fields = ['name', 'price', 'short_desc', 'detail_desc',
                  'colors', 'category', 'in_stock', 'date_added', 'pictures']
