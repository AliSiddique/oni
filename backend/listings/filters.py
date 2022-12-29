from django_filters import rest_framework as filters
from .models import Lisitings

class ListingFilter(filters.FilterSet):
    keywords = filters.CharFilter(field_name='title', lookup_expr='icontains')
    min_price = filters.NumberFilter(field_name='price', lookup_expr='gte')
    max_price = filters.NumberFilter(field_name='price', lookup_expr='lte')
    class Meta:
        model = Lisitings
        fields = ['keywords', 'min_price', 'max_price']