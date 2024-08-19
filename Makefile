up:
	docker compose up --attach app

clean:
	docker compose down --remove-orphans --volumes

install:
	docker compose run --rm -ti --no-deps app npm install