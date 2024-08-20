
up: #: Start the development environment services in foreground mode
	docker compose up --attach app

clean: #: Bring down containers, remove all data
	docker compose down --remove-orphans --volumes

install: #: install deps
	docker compose run --rm -ti --no-deps app npm install
