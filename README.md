# Assire Marketplace

Assire is a React freelancer marketplace with a Spring Boot REST API. Node.js/npm run the frontend toolchain; the API and its H2 database are separate.

## Requirements

- Node.js 20+
- Java 17+
- Internet access for the first Maven Wrapper run (Maven is downloaded automatically)

## Run locally

1. Start the API in a terminal (the Maven Wrapper downloads the pinned Maven version on first run):

   ```powershell
   npm run api
   ```

2. In a second terminal, install frontend dependencies and start Vite:

   ```powershell
   npm install
   npm run dev
   ```

3. Open the URL printed by Vite (normally `http://localhost:5173`).

The API runs on `http://localhost:8081` by default because port 8080 may already be in use. Vite proxies `/api` requests there. To change the API port, set `SERVER_PORT` before starting it and set `API_PROXY_TARGET` to the matching URL before starting Vite. For a separately hosted frontend, set `VITE_API_URL` and configure the API's `ASSIRE_FRONTEND_ORIGIN`.

## Features

- Responsive home, project browsing, freelancer directory, contact, registration, and login pages.
- Create and browse persistent job postings. Posting requires an account.
- Passwords are hashed by Spring Security; login uses an HTTP-only server session cookie.
- Contact messages and accounts are stored in the local H2 database at `backend/data/`.
- The initial job listings are seeded on first startup; freelancer profiles are example directory data.

The API is available under `/api`: `GET /jobs`, `POST /jobs`, `GET /freelancers`, `POST /contact`, and `GET /auth/me` plus `POST /auth/{register,login,logout}`.
