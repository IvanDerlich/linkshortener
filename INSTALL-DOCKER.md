# Docker Installation Guide

This guide shows how to install and run the Link Shortener application using Docker Compose.

## Prerequisites

- Node.js (v14 or higher)
- Docker
- Docker Compose

## Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/IvanDerlich/linkshortener.git
   cd linkshortener
   ```

2. **Install Docker & Docker Compose** (if you don't have them installed)

   - **Docker Desktop** (includes Docker Compose): [https://docs.docker.com/get-docker/](https://docs.docker.com/get-docker/)
   - **Docker Compose standalone**: [https://docs.docker.com/compose/install/](https://docs.docker.com/compose/install/)

3. **Run the application** (from project root)

   ```bash
   docker-compose up --build
   ```

4. **Access the application**

   - **Frontend**: [http://localhost:8080](http://localhost:8080)
   - **Backend API**: [http://localhost:3000](http://localhost:3000)
   - **API Documentation (Swagger)**: [http://localhost:3000/api/](http://localhost:3000/api/)

## Available Scripts

- `start` - Runs the app in development mode on port 8080
- `build` - Builds the app for production
- `serve` - Serves the production build locally
- `build:serve` - Builds and serves the app
- `test` - Launches the test runner

_Note: This Docker setup uses pnpm for consistency with the project's package management strategy_
