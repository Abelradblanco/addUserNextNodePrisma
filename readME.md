Front end: Typescript, NextJS, Typescript
Back end: NodeJS, Express, Prisma
Database: Postgres
Using Docker


Notes:
Once docker is running, we can check postgres with: ` docker exec -it db psql -U postgres` (db=container_name)

Back end folders includes 3 dependencies: express, prisma, prisma client: `npm i express prisma @prisma/client`

to initialize prism: `npx prisma init`

We need to compose up the back end and the db: 
1. `docker compose build`
2. `docker compose up -d db`
3. `docker compose up -d backend`

initialize db schema: `docker exec -it backend npx prisma migrate  dev --name init`
for postgres: `docker exec -it db psql -U postgres`