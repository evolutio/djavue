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

GREEN="\e[32m"
ENDCOLOR="\e[0m"

echo -e "\n${GREEN}"
echo -e " _______         __       ___   ____    ____  __    __   _______   "
echo -e "|       \       |  |     /   \  \   \  /   / |  |  |  | |   ____|  "
echo -e "|  .--.  |      |  |    /  ^  \  \   \/   /  |  |  |  | |  |__     "
echo -e "|  |  |  |.--.  |  |   /  /_\  \  \      /   |  |  |  | |   __|    "
echo -e "|  '--'  ||  \`--'  |  /  _____  \  \    /    |  \`--'  | |  |____   "
echo -e "|_______/  \______/  /__/     \__\  \__/      \______/  |_______|  "
echo -e "\n${GREEN}   👉 Django não está rodando no Dev Container automaticamente."
echo -e "      Use ./manage.py runserver OU Use o PLAY/DEBUG do VSCODE\n\n${ENDCOLOR}"
