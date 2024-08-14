
up: #: Start the development environment services in foreground mode
	docker compose up

clean: #: Bring down containers, remove all data
	docker compose down --remove-orphans --volumes

install: #: install deps
	docker compose run --rm -ti --no-deps publisher npm install
	docker compose run --rm -ti --no-deps subscriber1 npm install
	docker compose run --rm -ti --no-deps subscriber2 npm install



