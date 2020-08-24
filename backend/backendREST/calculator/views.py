from django.shortcuts import render
from django.http import Http404
from rest_framework.views import APIView
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.http import JsonResponse
from django.core import serializers
from django.conf import settings

# Create your views here.
@api_view()
def add(request):
    try:
        a = int(request.GET.get('a'))
        b = int(request.GET.get('b'))
        return Response({'result': a+b})
    except Exception:
        return Response({'result': 'ERROR '})

@api_view()
def subtract(request):
    try:
        a = int(request.GET.get('a'))
        b = int(request.GET.get('b'))
        return Response({'result': a-b})
    except Exception:
        return Response({'result': 'ERROR '})

@api_view()
def multiply(request):
    try:
        a = int(request.GET.get('a'))
        b = int(request.GET.get('b'))
        return Response({'result': a*b})
    except Exception:
        return Response({'result': 'ERROR '})

@api_view()
def divide(request):
    try:
        a = int(request.GET.get('a'))
        b = int(request.GET.get('b'))
        return Response({'result': a/b})
    except Exception:
        return Response({'result': 'ERROR '})

