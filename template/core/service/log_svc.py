from core.models import ActivityLog
import json

def log_login(user):
    logs = ActivityLog(
        type='login',
        logged_user=user,
    )
    logs.save()


def log_logout(user):
    logs = ActivityLog(
        type='logout',
        logged_user=user,
    )
    logs.save()
