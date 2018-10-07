"""DomoArduino URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from django.conf.urls import url, include
from arduino import views
from django.views.generic import TemplateView

urlpatterns = [
    path('admin/', admin.site.urls),
    url(r'^prueba/', include('arduino.urls', namespace="basehtml")),
    #path('', views.Vista, name='base'),
    path('', views.Inicio.as_view(), name='home'),
    path('confort/', views.ConfortView.as_view(), name='confort_diego'),
    path('seguridad/', views.SeguridadP.as_view(), name='seguridad'),
    path('pasosConfort/', views.ConfortP.as_view(), name='confortP'),
    path('pasosServidor/', views.ServidorWeb.as_view(), name='servidorP'),
    path('arduinoComponentes/', views.componentes.as_view(), name='componentes'),
    path('seguridadBase/', views.seguridadB.as_view(), name='seguridadB'),
    path('servidorBase/', views.servidorB.as_view(), name='servidorB'),
    url(r'^robots.txt$', TemplateView.as_view(template_name="robots.txt", content_type="text/plain"), name="robots_file"),
    url(r'^sitemap.xml$', TemplateView.as_view(template_name="sitemap.xml", content_type="xml"), name="sitemap_file"),
]
