from django.db import models
from django.contrib.auth.models import User
from mooc.save import newStorage
# Create your models here.


class Userfile(models.Model):
    sex_choice = (
        (u'M', u'男'),
        (u'F', u'女'),
        (u'N', u'保密'),
    )
    user = models.OneToOneField(User,verbose_name='用户名', unique=True)
    name = models.CharField('姓名',null=True,blank=True,max_length=20)
    sex = models.CharField('性别',choices=sex_choice,default='N',max_length=1)
    phone = models.CharField('电话', null=True,blank=True,max_length=11)
    born = models.DateField('出生日期', default='1990-1-1')
    intro = models.TextField('个人简介', null=True, blank=True)
    created_time = models.DateTimeField('创建时间', auto_now_add=True)
    last_modified_time = models.DateTimeField('修改时间', auto_now=True)

    class Meta:
        verbose_name = '个人信息管理'
        verbose_name_plural = '个人信息管理'
        ordering = ("-created_time",)

    def __str__(self):
        return 'user {}'.format(self.name)


class Maintag(models.Model):
    name = models.CharField('标签名', max_length=20)
    created_time = models.DateTimeField('创建时间', auto_now_add=True)
    last_modified_time = models.DateTimeField('修改时间', auto_now=True)

    class Meta:
        verbose_name = '标签'
        verbose_name_plural = '标签管理'

    def __str__(self):
        return self.name


class Secondtag(models.Model):
    name = models.CharField('标签名', max_length=20)
    uptag = models.ForeignKey('Maintag', verbose_name='一级标签', related_name="suptag")
    created_time = models.DateTimeField('创建时间', auto_now_add=True)
    last_modified_time = models.DateTimeField('修改时间', auto_now=True)

    class Meta:
        verbose_name = '二级标签'
        verbose_name_plural = '二级标签管理'

    def __str__(self):
        return self.name


class Video(models.Model):
    name = models.CharField('视频名称', null=True, blank=True, max_length=100)
    autor = models.ForeignKey(User,verbose_name='作者',related_name="auth_user")
    tag = models.ForeignKey('Secondtag',verbose_name='标签', related_name="supSecondtag")
    intro = models.TextField('视频描述', null=True, blank=True, max_length=500)
    photo = models.ImageField('展示图片', upload_to='photos/%Y/%m/%d/', unique=True, storage=newStorage(), null=True,blank=True)
    video = models.FileField('视频', upload_to='videos/%Y/%m/%d', unique=True, storage=newStorage(), null=True,blank=True)
    views = models.IntegerField('浏览数',default=0)
    created_time = models.DateTimeField('创建时间', auto_now_add=True)
    last_modified_time = models.DateTimeField('修改时间', auto_now=True)


    class Meta:
        verbose_name = '视频信息管理'
        verbose_name_plural = '视频信息管理'
        ordering = ("-created_time",)


class SlideImg(models.Model):
    photo = models.ImageField('滚动图片',upload_to='jslide/',unique=True)
    intro = models.CharField('图片介绍',max_length=200,null=True,blank=True)
    created_time = models.DateTimeField('创建时间', auto_now_add=True)
    last_modified_time = models.DateTimeField('修改时间', auto_now=True)

    class Meta:
        verbose_name = '滚动图片管理'
        verbose_name_plural = '滚动图片信息管理'
        ordering = ("-created_time",)