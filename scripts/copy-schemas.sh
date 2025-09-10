#!/usr/bin/env bash
set -euo pipefail

OUTPUT_DEST=""

while [[ $# -gt 0 ]]; do
  case "$1" in
    --out=*)
      OUTPUT_DEST="${1#*=}"
      shift
      ;;
    *)
      echo "Unknown option: $1"
      exit 1
      ;;
  esac
done

if [[ -z "$OUTPUT_DEST" ]]; then
  echo "Usage: $0 --out=<output-destination>"
  exit 1
fi

mkdir -p "$OUTPUT_DEST"

for file in ../../schema/*.telepact.json; do
  base="$(basename "$file" .telepact.json)"
  cp "$file" "$OUTPUT_DEST/${base}-gen.telepact.json"
done

echo "Copied and renamed schema files to $OUTPUT_DEST"
