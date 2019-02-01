from django.shortcuts import render,HttpResponse
from django.contrib.auth import authenticate, login, logout
from django.core.paginator import Paginator,EmptyPage,PageNotAnInteger
from .models import *
import json


# Create your views here.
# def acctRegister(request):
#     if request.method == 'POST':
#         username = request.GET.get("username")
#         password = request.GET.get("password")
#         rpassword = request.GET.get("rpassword")
#         return HttpResponse(json.dumps({"he":1}))


def index(request):
    slide = SlideImg.objects.all()
    caterogy = Maintag.objects.all()
    rec_course = Video.objects.order_by("-views")[:5]
    com_tag = Secondtag.objects.filter(uptag_id=1)
    com_course = Video.objects.order_by("-views").filter(tag__uptag_id=1)[:8]
    eco_tag = Secondtag.objects.filter(uptag_id=2)
    eco_course = Video.objects.order_by("-views").filter(tag__uptag_id=2)[:8]
    all = {"rcourse": rec_course, "com_tag": com_tag, "comcourse": com_course,
           "eco_tag": eco_tag, "eco_course": eco_course,"all_tag":caterogy,"slide":slide}
    return render(request,"mooc/index.html", all)


def showVideoList(request, up_id=0, sec_tag_id=0):
    if up_id is not None and sec_tag_id is not None:
        maintag = Maintag.objects.all()
        sec_tag = Secondtag.objects.filter(uptag_id=up_id)
        flaga = int(up_id)
        flagb = int(sec_tag_id)
        hotv = Video.objects.order_by("-views").all()[:10]
        if flaga != 0 and flagb !=0:
            tag_course = Video.objects.order_by("-views").filter(tag_id=sec_tag_id)
        elif flaga !=0 and flagb ==0:
            tag_course = Video.objects.order_by("-views").filter(tag__uptag_id=up_id)
        else:
            tag_course = Video.objects.order_by("-views").all()
        paginator = Paginator(tag_course,8)
        page = request.GET.get('page')
        try:
            contacts = paginator.page(page)
        except PageNotAnInteger:
            # If page is not an integer, deliver first page.
            contacts = paginator.page(1)
        except EmptyPage:
            # If page is out of range (e.g. 9999), deliver last page of results.
            contacts = paginator.page(paginator.num_pages)
        all = {"maintag": maintag, "sectag": sec_tag, "tag_course": tag_course,"flaga":flaga,
               "flagb": flagb, "video": contacts, "hotv":  hotv}
        return render(request, "mooc/category.html", all)


def videoShow(request, cid):
    video = Video.objects.get(id=cid)
    video.views += 1
    video.save()
    hotv = Video.objects.order_by("-views").all()[:10]
    return render(request,"mooc/video.html",{"video": video,"hotv": hotv})



