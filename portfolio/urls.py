from django.urls import path
from .views import ProjectList, ProjectDetail

urlpatterns = [
    path("", ProjectList.as_view(), name="project_list"),
    path("<slug:slug>/", ProjectDetail.as_view(), name="project_detail"),
]
