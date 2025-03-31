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


class CategoryCreateList(ListCreateAPIView):
    # permission_classes = [permissions.IsAuthenticated]

    def get_serializer_class(self):
        if self.request.method == "GET":
            return CategoryListDetailSerializer
        elif self.request.method == "POST":
            return CategoryCreateSerializer

    def get_queryset(self):
        queryset = Category.objects.filter(is_active=True)
        return queryset
