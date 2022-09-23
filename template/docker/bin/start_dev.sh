#!/bin/bash

wait-for-it $POSTGRES_HOST:$POSTGRES_PORT

./manage.py collectstatic --noinput
./manage.py migrate --noinput

cd /app
DEBUG=1 ./manage.py runserver 0.0.0.0:8000
