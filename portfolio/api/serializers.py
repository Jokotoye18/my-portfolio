from rest_framework import serializers
from portfolio.models import Portfolio


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
