from rest_framework import serializers
from .models import Product, Category


class ProductListDetailSerializer(serializers.ModelSerializer):
    images = serializers.ListField(source="get_images")
    categories = serializers.ListField(source="get_categories")
    status = serializers.ListField(source="get_status")
    final_price = serializers.IntegerField(source="get_final_price")

    class Meta:
        model = Product
        fields = ["pk", "name", "description", "price", "discount", "final_price", "score", "stock", "status",
                  "slug",
                  "categories",
                  "images"]


class ProductCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ["name", "description", "price", "discount", "categories", "stock"]


class CategoryListDetailSerializer(serializers.ModelSerializer):
    children = serializers.ListField(source="get_children")

    class Meta:
        model = Category
        fields = ["pk", "name", "parent", "description", "children", "is_active"]


class CategoryCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ["name", "parent", "description", "is_active"]


class SearchSerializer(serializers.Serializer):  # noqa
    products = ProductListDetailSerializer(many=True)
    categories = CategoryListDetailSerializer(many=True)
