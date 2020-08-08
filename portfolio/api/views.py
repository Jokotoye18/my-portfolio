from rest_framework.generics import ListAPIView, RetrieveUpdateDestroyAPIView
from .serializers import PortfolioSerializer
from portfolio.models import Portfolio


class PortfolioList(ListAPIView):
    serializer_class = PortfolioSerializer
    queryset = Portfolio.objects.all()


class PortfolioDetail(RetrieveUpdateDestroyAPIView):
    serializer_class = PortfolioSerializer
    queryset = Portfolio.objects.all()
    lookup_field = "slug"
