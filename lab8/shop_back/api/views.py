from django.http.response import  JsonResponse
from api.models import Product_model
from api.models import Category
# products = [
#     {
#         "id":i,
#         "name": f"Product {i}",
#         "price": i*500,
#         "description": f"Rating is good according to this number: {i}",
#         "count": i+10,
#         "is_active": False
#     }
#     for i in range(50)

# ]
def list_of_products(req):
    products = Product_model.objects.all()
    products_json = [prod.to_json() for prod in products] 
    return JsonResponse(products_json, safe=False)

def product_detail(req, product_id):
    try:
        product = Product_model.objects.get(id=product_id)
    except Product_model.DoesNotExist as e:
        return JsonResponse({"message": str(e)}, status=400)
    return JsonResponse(product.to_json())

def list_category(req):
    categories = Category.objects.all()
    categories_json = [categ.to_json() for categ in categories] 
    return JsonResponse(categories_json, safe=False)

def get_category(req, category_id):
    try:
        category = Category.objects.get(id=category_id)
    except Category.DoesNotExist as e:
        return JsonResponse({"message": str(e)}, status=400)
    return JsonResponse(category.to_json())

def get_category_products(req, categ_id):
    try:
        products_json = []
        category = Category.objects.get(id=categ_id)
        for prod in Product_model.objects.filter(category=int(categ_id)):
            obj = prod.to_json()
            products_json.append(obj) 
    except Category.DoesNotExist as e:
        return JsonResponse({"message": str(e)}, status=400)
    
    return JsonResponse(products_json, safe=False)