generate:
	../../scripts/copy-schemas.sh --out=src/gen
	telepact codegen --schema-dir src/gen --lang ts --out src/gen

# Start development environment
start-dev:
	docker-compose --env-file .env.local -f docker-compose.dev.yaml up

# Stop development environment
stop-dev:
	docker-compose -f docker-compose.dev.yaml down

# Follow development server logs
watch-dev:
	docker logs -f loveline-server


