from django.shortcuts import render
from django.http import HttpResponse, JsonResponse

# Create your views here.

products = [
    {
        'id': _id,
        'name': f'Product {_id}',
        'price': _id * 100
    }
    for _id in range(1, 11)
]


def index(request):
    return HttpResponse("<h4>Check is working</h4>")


def about(request):
    return HttpResponse("<h4>About</h4>")


def product_list(request):
    return JsonResponse(products, safe=False)


def product_detail(request, product_id):
    for p in products :
        if product_id == p['id']:
            return JsonResponse(p)
    return JsonResponse({'error' : 'Product not found'})
