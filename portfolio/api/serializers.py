from rest_framework import serializers
from portfolio.models import Portfolio
from portfolio.models import Contact


class PortfolioSerializer(serializers.HyperlinkedModelSerializer):
    hyper_url = serializers.HyperlinkedIdentityField(
        view_name="portfolio-detail", lookup_field="slug"
    )

    class Meta:
        model = Portfolio
        fields = [
            "id",
            "hyper_url",
            "title",
            "slug",
            "description",
            "technology",
            "image",
            "source",
            "url",
        ]

class ContactSerializer(serializers.ModelSerializer):
   class Meta:
        model = Contact
        fields = ['name', 'email', 'message']