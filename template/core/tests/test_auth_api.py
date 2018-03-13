from core.models import User
from django.test.client import Client
from django.test.testcases import TestCase
from core.tests import fixtures
import json


class TestAuthApi(TestCase):
    @classmethod
    def setUpTestData(cls):
        fixtures.user_jon()

    def test_auth_api(self):
        client = Client()
        r1 = client.get('/api/whoami')
        client.force_login(User.objects.get(username='jon'))
        r2 = client.post('/api/login', {'username': 'jon', 'password': 'snow'})
        r3 = client.get('/api/whoami')
        r4 = client.post('/api/logout')
        r5 = client.get('/api/whoami')
        self.assertEqual(200, r1.status_code)
        info = json.loads(r1.content.decode('utf-8'))
