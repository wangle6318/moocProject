from django import forms
from django.contrib.auth.models import User
from django.utils.timezone import now
from .models import *

class AcctRegForm(forms.ModelForm):
    username = forms.CharField()
    password = forms.CharField(widget=forms.PasswordInput)
    rpassword = forms.CharField(widget=forms.PasswordInput)



