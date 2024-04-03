from unicodedata import category
from django.db import models

# '''create table products (
#     id INTEGER,
#     name VARCHAR,
#     price NUMBER DEFAULT 0,
#     description TEXT,
#     count INTEGER,
#     is_active BOOLEAN
# );
# '''


class Product_model(models.Model):
    name = models.CharField(max_length=400)
    price = models.FloatField()
    description = models.TextField()
    count = models.IntegerField()
    is_active = models.BooleanField()
    category = models.CharField(max_length=255)
    category_id = models.IntegerField()
    def to_json(self):
        return {
            'id' : self.id,
            'name' : self.name,
            'price' : self.price,
            'description' : self.description,
            'count' : self.count,
            'is_active' : self.is_active,
            'category': self.category 
        }

class Category(models.Model):
    name = models.CharField(max_length=400)
    def to_json(self):
        return {
            'id' : self.id,
            'name' : self.name,
        }

# incorrect !!!
class Product(models.Model):
    name = models.CharField(max_length=400)
    price = models.FloatField
    description = models.TextField
    count = models.IntegerField
    is_active = models.BooleanField