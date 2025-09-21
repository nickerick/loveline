generate:
	../../scripts/copy-schemas.sh --out=src/gen
	telepact codegen --schema-dir src/gen --lang ts --out src/gen/telepact

# Start development environment
start-dev:
	docker-compose --env-file .env.local up

# Stop development environment
stop-dev:
	docker-compose down

# Follow development server logs
watch-dev:
	docker logs -f loveline-server

format: 
	npx prettier . --write

# Connect to mysql
connect-db:
	mysql -h 127.0.0.1 -P 3307 -u admin -p loveline

prod-image:
ifndef VERSION
	$(error VERSION is required. Usage: make docker-push VERSION=v1.0.0)
endif
	@echo "Building Docker image..."
	docker build -t ghcr.io/nickerick/loveline-service:${VERSION} .
	@echo "Built image with tag ghcr.io/nickerick/loveline-service:$(VERSION)"
	@echo "Pushing image..."
	docker push ghcr.io/nickerick/loveline-service:$(VERSION)
	docker tag ghcr.io/nickerick/loveline-service:$(VERSION) ghcr.io/nickerick/loveline-service:latest
	docker push ghcr.io/nickerick/loveline-service:latest
	@echo "Published image!"