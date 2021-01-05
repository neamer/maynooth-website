from django.db import models
from django.utils import timezone


def get_upload_location(instance, filename):
    return f'ProductPictures/{instance.product.name}/{filename}'


class Color(models.Model):
    name = models.CharField(max_length=20)
    hexa = models.CharField(max_length=7)

    def __str__(self):
        return f'{self.name}, {self.hexa}'


class Product(models.Model):
    LIVINGROOM = 'L'
    BEDROOM = 'B'
    KITCHEN_DINING = 'K'

    CATEGORY = [
        (LIVINGROOM, 'Living room'),
        (BEDROOM, 'Bedroom'),
        (KITCHEN_DINING, 'Kitchen & dining'),
    ]

    name = models.CharField(max_length=50)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    short_desc = models.CharField(max_length=150)
    detail_desc = models.TextField()
    colors = models.ManyToManyField(Color)
    category = models.CharField(
        max_length=2, choices=CATEGORY, default=LIVINGROOM)
    in_stock = models.BooleanField(default=True)
    date_added = models.DateField(default=timezone.now)

    def __str__(self):
        return self.name


class ProductGroup(models.Model):
    name = models.CharField(max_length=50)
    products = models.ManyToManyField(Product)

    def __str__(self):
        return self.name


class Picture(models.Model):
    product = models.ForeignKey(
        Product, on_delete=models.CASCADE, related_name='pictures')
    picture = models.ImageField(
        upload_to=get_upload_location, default="no-picture.png")

    def __str__(self):
        return self.picture.url
