from app1.accounts.models import User
from . import fixtures


def test_deve_retornar_usuario_nao_logado(client):
    resp = client.get('/api/accounts/whoami')

    assert resp.status_code == 200
    assert resp.json() == {'authenticated': False}


def test_deve_retornar_usuario_logado(client, db):
    fixtures.user_jon()

    client.force_login(User.objects.get(username='jon'))
    resp = client.get('/api/accounts/whoami')

    data = resp.json()
    assert resp.status_code == 200
    assert data == {
        'user': {
            'id': 1, 'name': 'Jon Snow', 'username': 'jon', 'first_name': 'Jon', 'last_name': 'Snow', 'email': 'jon@example.com',
            'permissions': {
                'ADMIN': False, 'STAFF': False
            }
        }, 'authenticated': True
    }


def test_deve_fazer_login(client, db):
    fixtures.user_jon()
    resp = client.post('/api/accounts/login', {'username': 'jon', 'password': 'snow'})
    login = resp.json()

    resp = client.get('/api/accounts/whoami')
    data = resp.json()

    assert login['email'] == 'jon@example.com'
    assert resp.status_code == 200
    assert data == {
        'user': {
            'id': 2, 'name': 'Jon Snow', 'username': 'jon', 'first_name': 'Jon', 'last_name': 'Snow', 'email': 'jon@example.com',
            'permissions': {
                'ADMIN': False, 'STAFF': False
            }
        },
        'authenticated': True
    }

def test_deve_fazer_login(client, db):
    fixtures.user_jon()
    client.force_login(User.objects.get(username='jon'))
    resp = client.post('/api/accounts/logout')

    assert resp.status_code == 200
    assert not resp.json()


def test_deve_fazer_logout_mesmo_sem_login(client, db):
    resp = client.post('/api/accounts/logout')
    assert resp.status_code == 200
