# Stage 1: Build static assets
FROM node:22-alpine AS build
WORKDIR /app

# Install pnpm package manager
RUN npm install -g pnpm

# Copy package configurations and lockfiles
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./

# Install dependencies (including sharp for WebP asset rendering)
RUN pnpm install --frozen-lockfile

# Copy the rest of the project source code
COPY . .

# Compile and build the production static website
RUN pnpm build

# Stage 2: Serve compiled static files with a high-performance Nginx server
FROM nginx:alpine

# Copy pre-rendered static files to Nginx web root directory
COPY --from=build /app/dist /usr/share/nginx/html

# Copy custom Nginx routing and caching configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose HTTP port 80
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
