from rest_framework import serializers

from .models import Lisitings

class ListingsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Lisitings
        fields = ('id','title','description','email','salary','price','user','address','createdAt','point','bedrooms','bathrooms','garage','sqft','lot_size','year_built','days_on_market','hoa_per_month','property_type','status')
        read_only_fields = ("user",)
