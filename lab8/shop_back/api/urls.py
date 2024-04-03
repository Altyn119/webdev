from django.urls import path
from api.views import list_of_products
from api.views import product_detail
from api.views import list_category
from api.views import get_category
from api.views import get_category_products

urlpatterns = [
    path('products/',list_of_products ),
    path('products/<int:product_id>/', product_detail),
    path('categories/', list_category),
    path('categories/<int:category_id>/', get_category),
    path('categories/<int:categ_id>/products', get_category_products),
    
]
