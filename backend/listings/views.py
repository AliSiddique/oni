from django.shortcuts import render
from rest_framework.decorators import api_view,permission_classes
from rest_framework.response import Response
from .serializers import ListingsSerializer
from .models import Lisitings
from rest_framework.authentication import TokenAuthentication
from rest_framework.generics import ListAPIView,CreateAPIView
from rest_framework.permissions import AllowAny,IsAuthenticated
from rest_framework.pagination import PageNumberPagination
from .filters import ListingFilter
from rest_framework.views import APIView
import stripe
# Create your views here.
stripe.api_key = 'sk_test_51Kdx2kD33nciG82ok24UGq3vm4NyIvOMkWJKrz9Sy38YuuHs1wjDCCSA8gpA340dcJG4NdiDZnWzYSDVg1HarWnO00B4Fin76s'

class JobList(ListAPIView):
    serializer_class = ListingsSerializer
    def get_queryset(self):
        qs = Lisitings.objects.all()
        title = self.request.query_params.get('title')
        if title is not None:
            qs = qs.filter(title__icontains=title)
            print(qs)
        return qs    

@api_view(['GET'])
def getAllJobs(request):
    filterset = ListingFilter(request.GET,queryset=Lisitings.objects.all().order_by('id'))
    count = filterset.qs.count()
    resPerPage = 1
    paginator = PageNumberPagination()
    paginator.page_size = resPerPage
    queryset = paginator.paginate_queryset(filterset.qs,request)
    serializer = ListingsSerializer(queryset,many=True)

    return Response({'jobs':serializer.data,'resPerPage':resPerPage,'count':count})

@api_view(['GET'])
@permission_classes([AllowAny])
def getJob(request,pk):
    listing = Lisitings.objects.get(id=pk)
    serializer = ListingsSerializer(listing,many=False)
    return Response(serializer.data)


    
class JobCreate(CreateAPIView):
    permission_classes = [IsAuthenticated]
    authentication_classes = [TokenAuthentication]
    queryset = Lisitings.objects.all()
    serializer_class = ListingsSerializer
    def perform_create(self, serializer):
        print(self.request.user)
        return serializer.save(user=self.request.user)    






class CreatePayment(APIView):
    def post(self , request,*args, **kwargs):
        data = request.data
        try:
            intent = stripe.PaymentIntent.create(
                amount = 1000,
                currency = 'gbp',       
                automatic_payment_methods = {
                    'enabled': True,
                },
            )
            print(f'Client secret is{intent["client_secret"]}')
            return Response({'clientSecret': intent['client_secret']})  
        except Exception as e:
            raise e
