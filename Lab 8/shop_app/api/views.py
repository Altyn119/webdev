from django.shortcuts import render
from api.models import Product
from api.models import Category
from django.http import HttpResponse, JsonResponse

# Create your views here.
def product_list(request):
    products = Product.objects.all()
    products_json = [p.to_json() for p in products]
    return  JsonResponse(products_json, safe=False)


def product_detail(request, product_id):
    products = Product.objects.all()
    products_json = [p.to_json() for p in products]
    for p in products_json :
        if product_id == p['id']:
            return JsonResponse(p)
    return JsonResponse({'error' : 'Product not found'})

def category_list(request):
    category = Category.objects.all()
    category_json = [c.to_json() for c in category]

    return  JsonResponse(category_json, safe=False)

def category_detail(request, category_id):
    category = Category.objects.all()
    category_json = [c.to_json() for c in category]
    for c in category_json :
        if category_id == c['id']:
            return JsonResponse(c)
    return JsonResponse({'error' : 'Category not found'})

def products_by_category(request, category_id):
    products = Product.objects.all()
    products_json = [p.to_json() for p in products]
    products_by_category = []
    for p in products_json:
        if p['category_id'] == category_id:
            products_by_category.append(p)
    return JsonResponse(products_by_category, safe=False)