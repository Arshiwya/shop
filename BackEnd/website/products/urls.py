from django.urls import path
from .views import ProductCreateListView, ProductDetailView, CategoryCreateListView, CategoryDetailView

app_name = "products"

urlpatterns = [
    path("", ProductCreateListView.as_view(), name="create-list"),
    path("<int:pk>/", ProductDetailView.as_view(), name="details"),

    path("categories/", CategoryCreateListView.as_view(), name="categories"),
    path("categories/<int:pk>", CategoryDetailView.as_view(), name="category-details"),

]
