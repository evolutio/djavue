from django.urls import path

from . import views

urlpatterns = [
    path("add", views.add_todo),
    path("list", views.list_todos),
]
