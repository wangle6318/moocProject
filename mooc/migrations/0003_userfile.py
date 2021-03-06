# -*- coding: utf-8 -*-
# Generated by Django 1.11.4 on 2019-01-23 01:23
from __future__ import unicode_literals

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('mooc', '0002_secondtag'),
    ]

    operations = [
        migrations.CreateModel(
            name='Userfile',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(blank=True, max_length=20, null=True, verbose_name='姓名')),
                ('sex', models.CharField(choices=[('M', '男'), ('F', '女'), ('N', '保密')], default='N', max_length=1, verbose_name='性别')),
                ('phone', models.CharField(blank=True, max_length=11, null=True, verbose_name='电话')),
                ('born', models.DateField(default='1990-1-1', verbose_name='出生日期')),
                ('intro', models.TextField(blank=True, null=True, verbose_name='个人简介')),
                ('created_time', models.DateTimeField(auto_now_add=True, verbose_name='创建时间')),
                ('last_modified_time', models.DateTimeField(auto_now=True, verbose_name='修改时间')),
                ('user', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL, verbose_name='用户名')),
            ],
            options={
                'verbose_name': '个人信息管理',
                'verbose_name_plural': '个人信息管理',
                'ordering': ('-created_time',),
            },
        ),
    ]
