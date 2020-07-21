from django.shortcuts import render
from django.views.generic import ListView, DetailView, TemplateView
from .models import Portfolio

class ProjectList(ListView):
    model = Portfolio
    queryset = Portfolio.objects.order_by('title')
    template_name = 'portfolio_list.html'
    context_object_name = 'project_list'
    
class ProjectDetail(DetailView):
    model = Portfolio
    template_name = 'portfolio_detail.html'
    context_object_name = 'project'

