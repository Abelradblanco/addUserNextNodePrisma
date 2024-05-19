# Project Overview

This project is a full-stack application with the following technologies:

- **Front End:** TypeScript, Next.js
- **Back End:** Node.js, Express, Prisma
- **Database:** PostgreSQL
- **Containerization:** Docker

## Getting Started

### Prerequisites

Make sure you have the following installed:

- Docker
- Docker Compose

### Installation

1. **Clone the repository:**

    ```bash
    git clone <repository-url>
    cd <repository-folder>
    ```

2. **Install backend dependencies:**

    ```bash
    cd backend
    npm install express prisma @prisma/client
    ```

3. **Initialize Prisma:**

    ```bash
    npx prisma init
    ```

### Running the Application

1. **Build Docker images:**

    ```bash
    docker compose build
    ```

2. **Start the PostgreSQL database:**

    ```bash
    docker compose up -d db
    ```

3. **Start the backend server:**

    ```bash
    docker compose up -d backend
    ```

4. **Start the frontend server:**

    ```bash
    docker compose up -d frontend
    ```

5. **Initialize the database schema:**

    ```bash
    docker exec -it backend npx prisma migrate dev --name init
    ```

### Checking PostgreSQL

Once Docker is running, you can access the PostgreSQL database with:

```bash
docker exec -it db psql -U postgres
```

#### Directory Structure
```bash
/project-root
  ├── backend
  │   ├── prisma
  │   ├── src
  │   ├── package.json
  │   └── ...
  ├── frontend
  │   ├── pages
  │   ├── public
  │   ├── package.json
  │   └── ...
  ├── docker-compose.yml
  └── README.md
```