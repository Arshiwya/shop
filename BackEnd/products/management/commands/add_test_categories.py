import string
import random
from django.core.management.base import BaseCommand
from products.models import Product, Category, ProductStatus  # noqa


class Command(BaseCommand):
    def handle(self, *args, **options):
        categories = Category.objects.filter(subcategories__isnull=True)

        products = Product.objects.all()
        if len(products) != 0:
            for product in products:
                categories_list = random.choices(categories, k=2)
                product.categories.set(categories_list)

            print("Categories added for products !")

        else:
            print("There is not any product in database !")
