from django.conf.urls import include
from django.urls import path
from .views import JobList,getJob,getAllJobs,JobCreate,CreatePayment
listings_urlpatterns = [
    path("api/jobe",JobList.as_view(),name="getJobs"),
    path("api/job/<int:pk>",getJob,name="getJob"),
    path("api/jobs",getAllJobs,name="getAllJobs"),
    path("api/job/create/",JobCreate.as_view(),name="cretaeJob"),
    path('api/job/sponsor',CreatePayment.as_view(),name="createPayment"),

]