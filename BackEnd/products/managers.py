from django.db import models
from django.db.models import Q


class ProductManager(models.Manager):

    def search(self, query):
        products = self.filter(Q(name__icontains=query) | Q(description__icontains=query))
        return products


class CategoryManager(models.Manager):

    def search(self, query):
        categories = self.filter(Q(name__icontains=query) | Q(description__icontains=query), is_active=True)
        return categories
