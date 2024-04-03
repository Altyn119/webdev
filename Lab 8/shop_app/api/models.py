from django.db import models


# Create your models here.
class Product(models.Model):
    name = models.CharField(max_length=250)
    price = models.FloatField(default=10000)
    description = models.TextField()
    count = models.IntegerField(default=100)
    is_active = models.BooleanField()
    category_id = models.IntegerField(default=100)

    def to_json(self):
        return {
            'id' : self.id,
            'name' : self.name,
            'price' : self.price,
            'description' : self.description,
            'count' : self.count,
            'is_active' : self.is_active,
            'category_id' : self.category_id
        }

class Category(models.Model):
    name = models.CharField(max_length=250)
    def to_json(self):
        return {
            'id' : self.id,
            'name' : self.name
        }
