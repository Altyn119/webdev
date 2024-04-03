from django.contrib import admin
from django.urls import path
from . import views
from api import views

urlpatterns = [
    path('products/', views.product_list),
    path('products/<int:product_id>/', views.product_detail),
    path('categories/', views.category_list),
    path('categories/<int:category_id>/', views.category_detail),
    path('categories/<int:category_id>/products', views.products_by_category)
]
