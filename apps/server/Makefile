codegen:
	telepact codegen --schema-dir ../../schema --lang ts --out src/gen

# Start development environment
start-dev:
	docker-compose --env-file .env.local -f docker-compose.dev.yaml up -d

# Stop development environment
stop-dev:
	docker-compose -f docker-compose.dev.yaml down

# Follow development server logs
watch-dev:
	docker logs -f loveline-server


