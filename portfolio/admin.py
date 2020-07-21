from django.contrib import admin
from .models import Portfolio


class PortfolioAdmin(admin.ModelAdmin): 
    prepopulated_fields = {"slug": ["title",]}

admin.site.register(Portfolio, PortfolioAdmin)

