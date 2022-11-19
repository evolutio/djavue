from django.urls import path

from . import views

urlpatterns = [
    path('dapau', views.dapau),

    path('add_todo', views.add_todo),
    path('list_todos', views.list_todos),
]
