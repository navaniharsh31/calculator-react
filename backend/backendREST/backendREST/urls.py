
from django.conf.urls import url
from django.contrib import admin
from calculator import views

urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^add/?$', views.add, name='add'),
    url(r'^subtract/?$', views.subtract, name='subtract'),
    url(r'^multiply/?$', views.multiply, name='multiply'),
    url(r'^divide/?$', views.divide, name='divide'),
]