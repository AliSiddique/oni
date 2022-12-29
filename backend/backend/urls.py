from django.contrib import admin
from django.urls import path
from accounts.urls import accounts_urlpatterns
from listings.urls import listings_urlpatterns
urlpatterns = [
    path("admin/", admin.site.urls),
]

urlpatterns += accounts_urlpatterns
urlpatterns += listings_urlpatterns