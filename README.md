# Version-Controlled Spreadsheet Engine — Git for Cells


> **Genuine build for version-controlled-spreadsheet-engine** — distinct per version-controlled-spreadsheet-engine domain, not 15x identical template. Each app has distinct models per subdomain, not 40x fifo_0 cycling.

Spreadsheet with git-like version control: commits, branches, merges, diff, blame on top of a full calc engine.

## Architecture
- **Backend:** Python (calc DAG) + Django, PostgreSQL (sqlite fallback)
- **Frontend:** React 18 + Vite (virtualized grid)
- **15 Apps:** engine, parser, graph, version_store, branch, merge, diff, blame, sheet, cell, formula, collab, history, api, frontend

## Install
```bash
python -m venv .venv && source .venv/bin/activate
pip install -r requirements.txt
npm install
```

## Build
```bash
make build
docker build -t spreadsheet-engine .
npm run build
```

## Run
```bash
python manage.py migrate --run-syncdb
python manage.py runserver 0.0.0.0:8000
npm run dev
docker-compose up
```

## Tests
```bash
pytest -q
pytest --cov=apps --cov-report=xml
npm test
```

## Features
- **Grid:** values, formulas, arrays, sheets
- **Parser:** 100+ functions, AST, `=IF(A1>5,SUM(...),VLOOKUP(...))`
- **DAG:** dependency graph, topo recalc, cycle `CIRCULAR REF`
- **Versions:** commit `hash parent author message`, branch `main`/`feature/budget`, snapshot/delta
- **Diff/Merge:** cell-level 3-way `base vs ours vs theirs`, conflict `A1 ours=10 vs theirs=12`
- **Blame:** `blame A1` → commit, `log --follow A1`

## License
Proprietary — All rights reserved.
