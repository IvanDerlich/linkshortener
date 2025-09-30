FROM node:18-alpine

WORKDIR /app

# Install pnpm
RUN npm install -g pnpm

# Install serve globally with npm (simpler than pnpm setup)
RUN npm install -g serve

# Copy workspace files
COPY . .


# Install dependencies using pnpm (including dev dependencies for build)
RUN pnpm install --frozen-lockfile --include-workspace-root

# Change to frontend directory and build
# WORKDIR /app/front-end
RUN pnpm --filter front-end build

EXPOSE 8080

# Use pnpm to serve the app
CMD ["pnpm", "--filter", "front-end", "serve"]
