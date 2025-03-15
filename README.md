# NestJS Playground

## 1. Database schema diagram

![database schema diagram](https://github.com/user-attachments/assets/e92152c1-ea19-4917-aa73-06517028c71a)

## 2. Getting Started

### 2-1. Installation

1. Clone the repository

```bash
git clone https://github.com/mnxmnz/nestjs-playground.git
```

2. Navigate to the project directory

```bash
cd nestjs-playground
```

3. Install dependencies

```bash
npm install
```

4. Create a .env file with the following environment variables

```bash
POSTGRES_HOST=""
POSTGRES_PORT=""
POSTGRES_USER=""
POSTGRES_PASSWORD=""
POSTGRES_DB=""
```

5. Run Database (Docker)

```bash
docker-compose up -d
```

### 2-2. Running the Application

To start the development server

```bash
npm run start:dev
```

The application will open in your default browser at `http://localhost:8008`

Access the Swagger API documentation at `http://localhost:8008/api`
