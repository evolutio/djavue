#!/bin/bash

which ssh

if [[ "$?" != "0" ]]; then
    echo "SSH client not found. Installing it..."
    apt-get update && apt-get install -y openssh-client

    mkdir -p $HOME/.ssh
fi

which vim

if [[ "$?" != "0" ]]; then
    echo "VIM not found. Installing it..."
    apt-get update && apt-get install -y vim
fi

if [[ ! -f ".vscode/settings.json" ]]; then
    cp .vscode/settings.json.default .vscode/settings.json
fi

if [[ ! -f ".vscode/launch.json" ]]; then
    cp .vscode/launch.json.default .vscode/launch.json
fi

./manage.py migrate
