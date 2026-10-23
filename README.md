<div align="center">

# ASSIRE

### Find your people. Make great work.

An independent-work marketplace that brings clients and freelancers together to make better projects happen.

[Explore the code](https://github.com/Bobby1412/FSAD) · [Report an issue](https://github.com/Bobby1412/FSAD/issues)

---

**React** · **Spring Boot** · **Java 17** · **H2 Database**

</div>

## About

Assire is a full-stack freelancer marketplace prototype. Clients can publish projects, freelancers can explore opportunities, and anyone can browse example talent profiles. Create an account to publish projects, then return later with your session still active.

## What you can do

- **Explore projects** — browse open jobs and search by title, category, or description.
- **Discover talent** — browse sample freelancer profiles and search by skills or name.
- **Publish a project** — sign in, add project details and a budget, and see the listing appear in the marketplace.
- **Create an account** — register and log in using a server-managed session.
- **Contact the team** — send a message through the contact form.
- **Use it on any screen** — responsive layouts for desktop and mobile.

## Tech stack

| Area | Technology |
| --- | --- |
| User interface | React, React Router, Vite |
| API | Java 17, Spring Boot, Spring Security |
| Persistence | Spring Data JPA, file-based H2 |
| Frontend tooling | Node.js and npm |

## Run it locally

### Prerequisites

- Node.js 20 or later
- Java 17 or later
- Internet access for the first API startup (the included Maven Wrapper downloads Maven automatically)

### 1. Start the API

Open a terminal in the project folder:

```powershell
npm run api
```

The Spring Boot API starts at **http://localhost:8081**. Keep this terminal open. The first startup may take a little longer while Maven and Java dependencies are downloaded.

### 2. Start the frontend

Open a second terminal in the project folder:

```powershell
npm install
npm run dev
```

Open the local URL printed by Vite, normally **http://localhost:5173**. Vite forwards `/api` requests to the Spring Boot API.

## Configuration

The API uses port `8081` by default to avoid clashing with services that commonly use `8080`.

To use a different API port, set `SERVER_PORT` before starting the API, then point the Vite proxy at it:

```powershell
$env:SERVER_PORT = "8082"
npm run api
```

In the frontend terminal:

```powershell
$env:API_PROXY_TARGET = "http://localhost:8082"
npm run dev
```

For a separately hosted frontend, set `VITE_API_URL` to the API base URL and configure the API's `ASSIRE_FRONTEND_ORIGIN` to match the frontend origin.

## API overview

All routes are under `/api`.

| Method | Route | Description | Access |
| --- | --- | --- | --- |
| `GET` | `/jobs` | List projects, newest first | Public |
| `POST` | `/jobs` | Publish a project | Signed-in account |
| `GET` | `/freelancers` | List example freelancer profiles | Public |
| `POST` | `/contact` | Submit a contact message | Public |
| `POST` | `/auth/register` | Create an account | Public |
| `POST` | `/auth/login` | Sign in | Public |
| `GET` | `/auth/me` | Check the current session | Public |
| `POST` | `/auth/logout` | End the current session | Public |

Authentication uses an HTTP-only session cookie. Passwords are hashed by Spring Security and are not returned by the API.

## Data and demo notes

- Jobs, registered accounts, and contact messages are stored in `backend/data/assire.mv.db`.
- Two example projects are added automatically when the database has no projects.
- Freelancer profiles are currently sample directory data, not user-managed profiles.
- This is a marketplace MVP: payments, applications, messaging between users, and production deployment are not implemented yet.

## Project structure

```text
.
├── backend/                 # Spring Boot REST API and H2 configuration
├── src/                     # React pages, components, and styles
├── .mvn/wrapper/            # Maven Wrapper configuration
├── index.html               # Vite application entry point
├── package.json             # Frontend scripts and dependencies
└── vite.config.js           # Dev server and API proxy
```

---

<div align="center">

Built for good work and the people behind it.

</div>
