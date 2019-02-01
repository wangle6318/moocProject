from django.contrib import admin
from mooc.models import *
# Register your models here.

@admin.register(Video)
class VideoAdmin(admin.ModelAdmin):
    list_display = ('name','tag','autor','photo','views','created_time','last_modified_time',)
    search_fields = ('name',)

    models = ('User','Secondtag',)

@admin.register(Userfile)
class UserfileAdmin(admin.ModelAdmin):
    list_display = ('user','name','sex','phone','born','intro',)
    search_fields = ('user','name',)

@admin.register(Maintag)
class MaintagAdmin(admin.ModelAdmin):
    list_display = ('name','created_time','last_modified_time',)


@admin.register(Secondtag)
class SecondtagAdmin(admin.ModelAdmin):
    list_display = ('name','uptag', 'created_time', 'last_modified_time',)


@admin.register(SlideImg)
class SlideImgAdmin(admin.ModelAdmin):
    list_display = ('intro', 'photo', 'created_time', 'last_modified_time',)