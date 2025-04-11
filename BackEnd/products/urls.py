from django.urls import path
from .views import ProductCreateListView, ProductDetailView, CategoryCreateListView, CategoryDetailView, \
    OfferProductListView, PopularProductListView, SearchView, BestSellerProductListView, NewProductListView

app_name = "products"

urlpatterns = [
    path("", ProductCreateListView.as_view(), name="create-list"),
    path("<int:pk>/", ProductDetailView.as_view(), name="details"),

    path("news/", NewProductListView.as_view(), name="news"),
    path("offers/", OfferProductListView.as_view(), name="offers"),
    path("populars/", PopularProductListView.as_view(), name="populars"),
    path("best-sellers/", BestSellerProductListView.as_view(), name="best-sellers"),

    path("categories/", CategoryCreateListView.as_view(), name="categories"),
    path("categories/<int:pk>", CategoryDetailView.as_view(), name="category-details"),

    path("search/<str:query>/", SearchView.as_view(), name="search"),

]
