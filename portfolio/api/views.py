from rest_framework.generics import ListAPIView, RetrieveUpdateDestroyAPIView, GenericAPIView, CreateAPIView
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from django.core.mail import send_mail
from django.conf import settings

from .serializers import PortfolioSerializer, ContactSerializer
from portfolio.models import Portfolio



class PortfolioList(ListAPIView):
    serializer_class = PortfolioSerializer
    queryset = Portfolio.objects.all()


class PortfolioDetail(RetrieveUpdateDestroyAPIView):
    serializer_class = PortfolioSerializer
    queryset = Portfolio.objects.all()
    lookup_field = "slug"


class SendMail(GenericAPIView):
    serializer_class = ContactSerializer

    def post(self, request, *args, **kwargs ):
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            to_email = 'jokotoyeademola95@gmail.com'
            sender_email = request.data['email']
            name = request.data['name']
            message = request.data['message']
            subscribe_message = f'Hi Jokotoye Ademola, {name} has contacted you from your portfolio saying \'{message}\'. You may want to reply to {sender_email}.'
            subject = 'Contact message received'
            from_email = settings.DEFAULT_FROM_EMAIL
            to_email = [to_email]
            send_mail(subject, subscribe_message, from_email, to_email, fail_silently=True)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        # serializer.is_valid(raise_exception=True)
        # return Response(serializer.data, status=status.HTTP_201_CREATED)
        
        