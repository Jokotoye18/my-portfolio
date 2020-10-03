from django.urls import path
# from .views import ProjectList, ProjectDetail
from .views import index

urlpatterns = [
    path("", index, name="index"),
    # path("<slug:slug>/", ProjectDetail.as_view(), name="project_detail"),
]
