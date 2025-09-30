# pnpm Installation Guide

This guide shows how to install and run the Link Shortener application using pnpm.

## Prerequisites

- Node.js (v14 or higher)

## Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/IvanDerlich/linkshortener.git
   cd linkshortener
   ```

2. **Install pnpm** (if you don't have it installed)

   Follow the official installation guide: [https://pnpm.io/installation](https://pnpm.io/installation)

3. **Install dependencies**

   ```bash
   pnpm install
   ```

4. **Start both frontend and backend**j

   You need to run both services in separate terminals:

   ```bash
   # Terminal 1 - Start backend
   pnpm --filter be dev

   # Terminal 2 - Start frontend
   pnpm --filter fe start
   ```

5. **Access the application**

   - **Frontend**: [http://localhost:80](http://localhost:8080)
   - **Backend API**: [http://localhost:3000](http://localhost:3000)
   - **API Documentation (Swagger)**: [http://localhost:3000/api/](http://localhost:3000/api/)

## Available Scripts

- `start` - Runs the app in development mode on port 8080
- `build` - Builds the app for production
- `serve` - Serves the production build locally
- `build:serve` - Builds and serves the app
- `test` - Launches the test runner

_Note: Use pnpm commands_
