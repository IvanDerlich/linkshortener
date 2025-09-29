# URL Shortener

<p id="description-urlshortener"> The backend service to make long links reduce to 7 characters <p>

# Demo

<img src="docs/1.gif" id="main-image-urlshortener" />

# [Live Version](https://shorten.ivanderlich.com)

# Useful Links

[API Specs](http://localhost:3000/api/)

[Frontend Repo](https://github.com/IvanDerlich/url-shortener-frontend)

# Front End Demo

<img src="docs/2.gif" />

# Development Setup

## Prerequisites

- **WSL2** (Windows Subsystem for Linux 2) or **Ubuntu/Debian Linux**
- **Node.js 18+** installed
- **pnpm** package manager (for efficient dependency management)
- **sudo privileges** for Docker installation

## Quick Start

### 1. Install Docker

```bash
# Install Docker and Docker Compose
sudo ./scripts/install-docker.sh

# Log out and back in (or restart WSL2) for group changes to take effect
```

### 2. Install Dependencies

```bash
# Install Node.js dependencies using pnpm
pnpm install
```

### 3. Start Development Environment

```bash
# Start Docker services (database, etc.)
npm run docker:up

# Start the application
npm run dev
```

## Available Scripts

```bash
# Development
pnpm run dev              # Start development server
pnpm run start            # Start production server

# Docker Management
pnpm run docker:up        # Start Docker services
pnpm run docker:down      # Stop Docker services
pnpm run docker:logs      # View Docker logs
pnpm run docker:clean     # Clean up Docker resources

# Testing & Quality
pnpm run test             # Run tests
pnpm run lint             # Run linter

# Workspace Management
pnpm --filter fe start    # Start frontend only
pnpm --filter be dev       # Start backend only
```

## Docker Setup Details

The `install-docker.sh` script will:

- Install Docker Engine using the official Docker installation script
- Install Docker Compose (latest version)
- Add your user to the docker group (requires logout/login)
- Provide instructions for auto-starting Docker daemon in WSL2

### Manual Docker Installation

If you prefer to install Docker manually, follow the [official Docker documentation](https://docs.docker.com/engine/install/ubuntu/).

### WSL2 Auto-Start Configuration

To automatically start Docker daemon in WSL2, add this to your `~/.bashrc`:

```bash
# Start Docker daemon if not running
if ! pgrep -x dockerd > /dev/null; then
    sudo dockerd > /dev/null 2>&1 &
    disown
fi
```

## Troubleshooting

### Docker Permission Issues

```bash
# If you get permission denied errors
sudo usermod -aG docker $USER
# Then log out and back in
```

### WSL2 Docker Issues

```bash
# Restart Docker daemon
sudo service docker restart

# Check Docker status
sudo service docker status
```

## Package Management

This project uses **pnpm** (performant npm) instead of npm for several key advantages:

- **🚀 Faster installations** - Up to 2x faster than npm
- **💾 Disk space efficiency** - Saves up to 50% disk space through content-addressable storage
- **🔗 Smart linking** - Uses hard links and symlinks to avoid duplication
- **🏗️ Monorepo support** - Built-in workspace management for frontend and backend
- **🔒 Stricter dependency resolution** - Prevents phantom dependencies

### Installing pnpm

```bash
# Install pnpm globally
npm install -g pnpm
# or using the official installer
curl -fsSL https://get.pnpm.io/install.sh | sh -
```

# Technologies used

<ul id="tech-list-urlshortener">
  <li>Node.js</li>
  <li>Express.js</li>
  <li>React.js</li>
  <li>MongoDB</li>
  <li>Mongoose</li>
  <li>Swagger</li>
  <li>Docker</li>
  <li>Docker Compose</li>
  <li>pnpm (Package Manager)</li>
</ul>

# Author

[Ivan Derlich](ivanderlich.com)
