from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.index, name='index'),
    url(r'^category/(?P<up_id>[0-9]*)/(?P<sec_tag_id>[0-9]*)$', views.showVideoList, name='category_list'),
    url(r'^category/(?P<up_id>[0-9]*)$', views.showVideoList, name='category_list'),
    url(r'^category$', views.showVideoList, name='category_list'),
    url(r'^video/(?P<cid>[0-9]*)$',views.videoShow,name='video'),
    # url(r'^register$',views.acctRegister,name='register'),
]