from app1.accounts.models import User
from app1.accounts.tests import fixtures
from app1.tasks.models import Todo


def test_criar_tarefa_sem_login(client):
    resp = client.post("/api/tasks/add", {"new_task": "walk the dog"})
    assert resp.status_code == 401


def test_criar_tarefa_com_login(client, db):
    fixtures.user_jon()
    client.force_login(User.objects.get(username="jon"))
    resp = client.post("/api/tasks/add", {"new_task": "walk the dog"})
    assert resp.status_code == 200


def test_criar_tarefa_com_login(client, db):
    fixtures.user_jon()
    Todo.objects.create(description="walk the dog")

    client.force_login(User.objects.get(username="jon"))
    resp = client.get("/api/tasks/list")
    data = resp.json()

    assert resp.status_code == 200
    assert data == {"todos": [{"description": "walk the dog", "done": False, "id": 1}]}
