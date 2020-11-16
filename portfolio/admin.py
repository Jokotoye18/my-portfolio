from django.contrib import admin
from .models import Portfolio, Contact, ProjectTech


class PortfolioAdmin(admin.ModelAdmin): 
    prepopulated_fields = {"slug": ["title",]}

admin.site.register(Portfolio, PortfolioAdmin)

admin.site.register(ProjectTech)
admin.site.register(Contact)

