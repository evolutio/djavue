#!/bin/bash

./manage.py collectstatic --noinput
./manage.py migrate --noinput

cd /app/frontend
#NODE_ENV=development PORT=3001 HOST=0.0.0.0 API_MOCK=1 npm run dev &
npm run dev &

cd /app
DEBUG=1 ./manage.py runserver 0.0.0.0:8000
