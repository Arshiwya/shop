from django.urls import path
from .views import ProductCreateListView, ProductDetailView

app_name = "products"

urlpatterns = [
    path("", ProductCreateListView.as_view(), name="create-list"),
    path("<int:pk>/", ProductDetailView.as_view(), name="detail"),

]
