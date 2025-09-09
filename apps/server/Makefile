codegen:
	telepact codegen --schema-dir ../../schema --lang ts --out src/gen

start:
	docker-compose --env-file .env.local -f docker-compose.dev.yaml up

stop:
	docker-compose --env-file .env.local -f docker-compose.dev.yaml down
