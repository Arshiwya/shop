from rest_framework.generics import ListCreateAPIView, RetrieveAPIView
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import permissions

from .models import Product, Category
from .serializers import ProductListDetailSerializer, ProductCreateSerializer, CategoryListDetailSerializer, \
    CategoryCreateSerializer, SearchSerializer


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
        queryset = Category.objects.filter(is_active=True, parent=None)
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


class SearchView(APIView):
    serializer_class = SearchSerializer

    def get(self, request, **kwargs):
        response = self.get_search_response(kwargs)
        return response

    def get_search_response(self, kwargs):
        query = kwargs["query"]
        products = Product.objects.search(query=query)
        categories = Category.objects.search(query=query)

        search_data = {
            "products": products,
            "categories": categories
        }

        serializer = self.serializer_class(search_data)

        return Response(serializer.data)
