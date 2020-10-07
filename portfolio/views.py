from django.shortcuts import render
# from django.views.generic import ListView, DetailView
# from .models import Portfolio


def index(request):
    return render(request, "index.html")

# class ProjectList(ListView):
#     model = Portfolio
#     queryset = Portfolio.objects.order_by("title")
#     template_name = "build/index.html"
#     context_object_name = "project_list"


# class ProjectDetail(DetailView):
#     model = Portfolio
#     template_name = "portfolio_detail.html"
#     context_object_name = "project"
