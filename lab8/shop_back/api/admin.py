import imp
from django.contrib import admin
from api.models import Product_model
from api.models import Category

admin.site.register(Product_model)
admin.site.register(Category)
