FROM node:18-alpine

WORKDIR /app

# Install pnpm
RUN npm install -g pnpm

# Copy workspace files from parent directory
COPY ../pnpm-workspace.yaml ../pnpm-lock.yaml ./

# Copy frontend package.json
COPY package.json ./front-end/

# Install dependencies using pnpm
RUN pnpm install --frozen-lockfile

# Install serve globally
RUN pnpm add -g serve

# Copy source code
COPY . ./front-end/

# Build the app using pnpm
RUN pnpm --filter fe build

EXPOSE 8080

# Use pnpm to serve the app
CMD ["pnpm", "--filter", "fe", "serve"]
