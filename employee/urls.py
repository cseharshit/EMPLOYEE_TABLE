from django.contrib import admin
from django.urls import path, include
from . import views

urlpatterns = [
    # path('employees/', views.Get_Employees.as_view()),
    path('employees/', views.employee_list),
    path('employees/<int:pk>', views.employee_detail),
]
