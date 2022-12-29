from django.db import models
from django.core.validators import MinValueValidator,MaxValueValidator
from django.contrib.gis.db import models as gismodels
from django.contrib.auth.models import User
from django.contrib.gis.geos import Point
import geocoder
# Create your models here.


class Lisitings(models.Model):
    title = models.CharField(max_length=50)
    description = models.TextField()
    email = models.EmailField()
    salary = models.IntegerField(default=1,validators=[MinValueValidator(1),MaxValueValidator(1000000)])
    price = models.IntegerField(default=1)
    user = models.ForeignKey(User,on_delete=models.CASCADE)
    address = models.CharField(max_length=100)
    createdAt = models.DateTimeField(auto_now_add=True)
    point = gismodels.PointField(default=Point(0.0,0.0))
    bedrooms = models.IntegerField(default=1,validators=[MinValueValidator(1),MaxValueValidator(100)])
    bathrooms = models.IntegerField(default=1,validators=[MinValueValidator(1),MaxValueValidator(100)])
    garage = models.IntegerField(default=1,validators=[MinValueValidator(1),MaxValueValidator(100)])
    sqft = models.IntegerField(default=1,validators=[MinValueValidator(1),MaxValueValidator(1000000)])
    lot_size = models.IntegerField(default=1,validators=[MinValueValidator(1),MaxValueValidator(1000000)])
    year_built = models.IntegerField(default=1,validators=[MinValueValidator(1),MaxValueValidator(1000000)])
    days_on_market = models.IntegerField(default=1,validators=[MinValueValidator(1),MaxValueValidator(1000000)])
    hoa_per_month = models.IntegerField(default=1,validators=[MinValueValidator(1),MaxValueValidator(1000000)])
    property_type = models.CharField(max_length=50)
    status = models.CharField(max_length=50)
    
    def __str__(self):
        return self.title
    def save(self,*args,**kwargs):
        g = geocoder.mapquest(self.address,key="oqH0ET5EcnkTVdbdVSEtANAMGGVFiUNI")
        print(g)
        lng = g.lng
        lat = g.lat
        self.point = Point(lng,lat)
        super(Lisitings,self).save(*args,**kwargs)
