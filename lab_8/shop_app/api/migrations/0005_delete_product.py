# Generated by Django 4.1.7 on 2023-04-05 04:44

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ("api", "0004_delete_category"),
    ]

    operations = [
        migrations.DeleteModel(
            name="Product",
        ),
    ]
