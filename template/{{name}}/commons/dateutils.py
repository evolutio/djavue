# from datetime import datetime
from django.utils import timezone


def today():
    return timezone.now().date()


def now():
    return timezone.now()
