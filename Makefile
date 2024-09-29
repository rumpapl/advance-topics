
up: #: Start the development environment services in foreground mode
	docker compose up --attach app

install: #: install deps
	docker compose run --rm -ti --no-deps app npm install

FOLDERS_TO_DELETE := csv-files # List of folders to delete
clean: #: Bring down containers, remove all data, and delete specified folders
	@echo "Bringing down Docker containers and removing all volumes"
	docker compose down --remove-orphans --volumes
	rm -rf $(FOLDERS_TO_DELETE)
	@echo "Folders and Docker containers cleaned."