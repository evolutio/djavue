.ONESHELL:

ENV_PREFIX=$(shell python -c "if __import__('pathlib').Path('.venv/bin/pip').exists(): print('.venv/bin/')")


.PHONY: help
help:                      ## Show this help
	@echo "Usage: make <target>"
	@echo ""
	@echo "Targets:"
	@fgrep "##" Makefile | fgrep -v fgrep


.PHONY: show
show:                      ## Show the current environment
	@echo "Current environment:"
	if [ -z "${ENV_PREFIX}" ]
	then
		if [ -d .venv ]; then
			echo "Virtualenv not activated"
			echo "Run:"
			echo "  source .venv/bin/activate"
		else
			echo "Virtualenv not created"
			echo "Run:"
			echo "  make virtualenv"
		fi
		exit 1
	fi
	@echo "Current environment:"
	@echo ">>> Running using '$(ENV_PREFIX)'"
	@$(ENV_PREFIX)python -V
	@$(ENV_PREFIX)python -m site
	


#run: $(eval SHELL:=/bin/bash)
.PHONY: virtualenv
virtualenv:                ## Create a virtual environment
	@echo "creating virtualenv ..."
	@rm -rf .venv
	@virtualenv .venv
	@./.venv/bin/pip install -U pip
	@echo
	@echo "!!! Please run 'source .venv/bin/activate' to enable the environment !!!"


.PHONY: system-packages
system-packages:           ## Install SO dependencies
	@sudo apt install -y libpq-dev build-essential libssl-dev libffi-dev


.PHONY: python-packages
python-packages:           ## Install project dependencies (dev mode)
	@echo "Installing dependencies..."
	if [ -z "${ENV_PREFIX}" ]
	then
		echo "Virtualenv not activated"
		echo "Run:"
		echo "  make show"
		exit 1
	fi
	@$(ENV_PREFIX)pip install -r requirements-dev.txt
	@echo "Project dependencies installed!!!"


.PHONY: install
install: system-packages python-packages    ## Install all dependencies



.PHONY: apimock
apimock:                ## Run Postgres for testing (using docker)
	@docker-compose -f docker-compose.yml -f docker-compose.apimock.yml up nginx


.PHONY: db-test-down
apimock-down:              ## Stop Postgres (test instance)
	@docker-compose -f docker-compose.yml -f docker-compose.apimock.yml down


.PHONY: clean
clean:                     ## Clean unused files
	@find ./ -name '*.pyc' -exec rm -f {} \; 2> /dev/null
	@find ./ -name '__pycache__' -exec rm -rf {} \; 2> /dev/null
	@rm -rf .cache
	@rm -rf .pytest_cache

