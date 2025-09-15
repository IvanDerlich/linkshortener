FROM node:18-alpine

WORKDIR /app

# Copy package files
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Install serve globally for the serve script
RUN npm install -g serve

# Copy source code
COPY . .

# Build the app using package.json script
RUN npm run build

EXPOSE 8080

# Use package.json script to serve the app
CMD ["npm", "run", "serve"]
