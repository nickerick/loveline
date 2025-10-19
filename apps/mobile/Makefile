generate:
	../../scripts/copy-schemas.sh --out=src/gen/telepact/schemas/
	telepact codegen --schema-dir src/gen/telepact/schemas --lang ts --out src/gen/telepact

format: 
	npx prettier . --write