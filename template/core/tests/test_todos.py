from core.models import User, Todo
from core.tests import fixtures


def test_criar_tarefa_sem_login(client):
    resp = client.post('/api/add_todo', {'new_task': 'walk the dog'})
    assert resp.status_code == 401


def test_criar_tarefa_com_login(client, db):
    fixtures.user_jon()
    client.force_login(User.objects.get(username='jon'))
    resp = client.post('/api/add_todo', {'new_task': 'walk the dog'})
    assert resp.status_code == 200


def test_criar_tarefa_com_login(client, db):
    fixtures.user_jon()
    Todo.objects.create(description='walk the dog')

    client.force_login(User.objects.get(username='jon'))
    resp = client.get('/api/list_todos')
    data = resp.json()

    assert resp.status_code == 200
    assert data == {
        'todos': [
            {'description': 'walk the dog', 'done': False, 'id': 1}
        ]
    }
