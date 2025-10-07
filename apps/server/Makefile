generate:
	../../scripts/copy-schemas.sh --out=src/gen/telepact/schemas/
	telepact codegen --schema-dir src/gen/telepact/schemas --lang ts --out src/gen/telepact

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
	@echo "Building multi-platform Docker image..."
	docker buildx build \
		--platform linux/amd64,linux/arm64 \
		-t ghcr.io/nickerick/loveline-service:${VERSION} \
		-t ghcr.io/nickerick/loveline-service:latest \
		--push \
		.
	@echo "Built and pushed multi-platform image:"
	@echo "  ghcr.io/nickerick/loveline-service:${VERSION}"
	@echo "  ghcr.io/nickerick/loveline-service:latest"