from rest_framework.generics import ListCreateAPIView, RetrieveAPIView
from rest_framework import permissions

from .models import Product, Category
from .serializers import ProductListDetailSerializer, ProductCreateSerializer, CategoryListDetailSerializer, \
    CategoryCreateSerializer


class ProductCreateListView(ListCreateAPIView):
    # permission_classes = [permissions.IsAuthenticated]

    def get_serializer_class(self):
        if self.request.method == "GET":
            return ProductListDetailSerializer
        elif self.request.method == "POST":
            return ProductCreateSerializer

    def get_queryset(self):
        queryset = Product.objects.all()
        return queryset


class ProductDetailView(RetrieveAPIView):
    # permission_classes = [permissions.IsAuthenticated]
    serializer_class = ProductListDetailSerializer
    queryset = Product.objects.all()
    lookup_field = "pk"


class CategoryCreateListView(ListCreateAPIView):
    # permission_classes = [permissions.IsAuthenticated]

    def get_serializer_class(self):
        if self.request.method == "GET":
            return CategoryListDetailSerializer
        elif self.request.method == "POST":
            return CategoryCreateSerializer

    def get_queryset(self):
        queryset = Category.objects.filter(is_active=True)
        return queryset


class CategoryDetailView(RetrieveAPIView):
    serializer_class = CategoryListDetailSerializer
    queryset = Category.objects.filter(is_active=True)
    lookup_field = "pk"


class OfferProductListView(ProductCreateListView):
    # permission_classes = [permissions.IsAuthenticated]
    http_method_names = ["get"]

    def get_queryset(self):
        queryset = Product.objects.filter(status__name="offer")
        return queryset


class PopularProductListView(ProductCreateListView):
    # permission_classes = [permissions.IsAuthenticated]
    http_method_names = ["get"]

    def get_queryset(self):
        queryset = Product.objects.filter(status__name="popular")
        return queryset
