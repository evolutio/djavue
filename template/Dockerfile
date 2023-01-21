FROM python:3.9-slim

WORKDIR /app

# Install basic SO and Python
RUN apt-get update --fix-missing \
	&& apt-get install -y --no-install-recommends \
		build-essential \
		libpq-dev \
		python-dev \
        wget curl vim locales zip unzip apt-utils \
		wait-for-it \
	&& rm -rf /var/lib/apt/lists/* \
    && pip install uwsgi uwsgitop

# Replace shell with bash so we can source files
RUN rm /bin/sh && ln -s /bin/bash /bin/sh && \
    echo "export LS_OPTIONS='--color=auto'" >>~/.bashrc && \
    echo "eval "\`dircolors\`"" >>~/.bashrc && \
    echo "alias ls='ls \$LS_OPTIONS'" >>~/.bashrc && \
    echo "alias ll='ls \$LS_OPTIONS -l'" >>~/.bashrc && \
    echo "alias l='ls \$LS_OPTIONS -lA'" >>~/.bashrc

RUN mkdir /dkdata

#### Prepare BACKEND Django API
COPY requirements.txt ./
COPY requirements-dev.txt ./

RUN pip install -r requirements-dev.txt

ENV PYTHONUNBUFFERED=1 
ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONIOENCODING=UTF-8
ENV SHELL=/bin/bash LANG=en_US.UTF-8

COPY . ./

EXPOSE 8000

# COPY docker/bin/* /usr/bin/
