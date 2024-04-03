from django.urls import path
import rest_framework_jwt.views
from .views import *
from rest_framework import routers

r = routers.DefaultRouter()
r.register('movie2', MovieModelViewSet)

urlpatterns = [
    path('login/', rest_framework_jwt.views.obtain_jwt_token),
    path('genres/', genres_list),
    path('genres/<int:genre_id>/', genres_movies),
    path('movies/', movies_list),
    path('movies/<int:movie_id>/', movies_detail),
    path('movies/<int:movie_id>/comments/', CommentsListAPIView.as_view()),
    path('movies/<int:movie_id>/comments/<int:pk>/', CommentDetailAPIView.as_view()),
    path('users/', UsersListAPIView.as_view()),
    path('users/<int:pk>/', UserDetailAPIView.as_view()),
    path('comments/', CommentsListAPIView.as_view()),
    path('comments/<int:pk>/', CommentDetailAPIView.as_view())
]

urlpatterns += r.urls