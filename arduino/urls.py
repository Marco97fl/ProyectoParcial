from django.conf.urls import url, include
from arduino.views import Vista

app_name="arduino"
urlpatterns = [ 

	url(r'base',Vista.as_view(), name='base'),

]