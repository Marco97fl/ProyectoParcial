from django.shortcuts import render
from django.views.generic import TemplateView
# Create your views here.
class Vista(TemplateView):
	template_name='base/base.html'


class ConfortView(TemplateView):
	template_name='apparduino/confort.html'
		

class SeguridadP(TemplateView):
	template_name='Seguridad/seguridadP.html'
		
class ConfortP(TemplateView):
	template_name='confort/confortP.html'
		
class ServidorWeb(TemplateView):
	template_name='servidor/servidor.html'

class componentes(TemplateView):
	template_name='componentes/componentes.html'
		
		