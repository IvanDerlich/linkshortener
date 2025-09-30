FROM node:18-alpine

WORKDIR /app

# Install pnpm
RUN npm install -g pnpm

# Copy workspace files
COPY pnpm-workspace.yaml ./
COPY pnpm-lock.yaml ./

# Copy backend package.json
COPY back-end/package.json ./back-end/

# Install dependencies using pnpm
RUN pnpm install --frozen-lockfile

# Copy backend source code
COPY back-end/ ./back-end/

EXPOSE 3000

CMD ["pnpm", "--filter", "back-end", "start"]
