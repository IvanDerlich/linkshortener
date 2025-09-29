FROM node:18-alpine

WORKDIR /app

# Install pnpm
RUN npm install -g pnpm

# Copy workspace files
COPY pnpm-workspace.yaml pnpm-lock.yaml ./

# Copy backend package.json
COPY back-end/package.json ./back-end/

# Install dependencies using pnpm
RUN pnpm install --frozen-lockfile

# Copy source code
COPY back-end/ ./back-end/

# Change to back-end directory
WORKDIR /app/back-end

EXPOSE 3000

CMD ["pnpm", "start"]
