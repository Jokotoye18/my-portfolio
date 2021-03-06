from django.urls import path
from .views import PortfolioList, PortfolioDetail, SendMail


urlpatterns = [
    path("portfolio-list/", PortfolioList.as_view(), name='portfolio-list'),
    path(
        "portfolio-detail/<slug:slug>/",
        PortfolioDetail.as_view(), name='portfolio-detail'
    ),
    path('contact/', SendMail.as_view(), name='contact')
]
