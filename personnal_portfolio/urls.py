from django.contrib import admin
from django.conf import settings
from django.conf.urls.static import static
from django.urls import path, include, re_path
from django.views.generic import TemplateView



urlpatterns = [
    path('admin/', include('admin_honeypot.urls', namespace='admin_honeypot')),
    path('admin@jokotoye18/', admin.site.urls),
    path('', include('portfolio.urls')),
    path('api/', include('portfolio.api.urls'))
]

 
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

admin.site.site_header = "Jokotoye18 Admin"
admin.site.site_title = "Portfolio"
admin.site.index_title = "Jokotoye18 Portfolio Portal"