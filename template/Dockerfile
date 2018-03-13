FROM python:3.6

RUN apt-get update --fix-missing && \
    apt-get install -y curl vim nano git locales zip unzip && \
    pip install uwsgi uwsgitop

# Replace shell with bash so we can source files
RUN rm /bin/sh && ln -s /bin/bash /bin/sh && \
    echo "export LS_OPTIONS='--color=auto'" >>~/.bashrc && \
    echo "eval "\`dircolors\`"" >>~/.bashrc && \
    echo "alias ls='ls \$LS_OPTIONS'" >>~/.bashrc && \
    echo "alias ll='ls \$LS_OPTIONS -l'" >>~/.bashrc && \
    echo "alias l='ls \$LS_OPTIONS -lA'" >>~/.bashrc

RUN cd /tmp && \
    wget --quiet https://nodejs.org/dist/v9.1.0/node-v9.1.0-linux-x64.tar.xz && \
    tar xf node-v9.1.0-linux-x64.tar.xz && \
    cp -r node-v9.1.0-linux-x64/* /usr && \
    rm node-v9.1.0-linux-x64.tar.xz && \
    npm install -g pm2

RUN mkdir /dkdata
WORKDIR /app

COPY requirements.txt ./
RUN pip install -r requirements.txt


COPY frontend/package.json frontend/package.json
RUN cd frontend && npm install
COPY frontend frontend
RUN cd frontend && npm run build

ENV SHELL=/bin/bash PYTHONUNBUFFERED=1 NODE_ENV=production API_MOCK=0 PYTHONIOENCODING=UTF-8 LANG=en_US.UTF-8 DJANGO_STATIC_ROOT=/dkdata/static DJANGO_LOG_FILE=/dkdata/{{name}}.log UWSGI_PROCESSES=3 PORT=3000 HOST=0.0.0.0 API_BASE_URL=http://localhost:8000

COPY . /app
COPY docker/bin/* /usr/bin/
