from django.contrib import admin
from .models import Portfolio, Contact


class PortfolioAdmin(admin.ModelAdmin): 
    prepopulated_fields = {"slug": ["title",]}

admin.site.register(Portfolio, PortfolioAdmin)

admin.site.register(Contact)

