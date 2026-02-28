FROM node:20-alpine AS builder

WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm ci

# Copy source and build
COPY . .
RUN npm run build

# Runtime stage: serve static files with nginx
FROM nginx:alpine

# Copy built assets from the builder stage (dist/)
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose HTTP port
EXPOSE 80

# Default nginx command
CMD ["nginx", "-g", "daemon off;"]
