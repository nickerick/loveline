# Stage 1: Build
FROM node:24-alpine AS builder
WORKDIR /usr/src/app

# Copy src files required for build
COPY package*.json ./
COPY tsconfig.json ./ 
COPY src ./src

# Build app
RUN npm install
RUN npm run build

# Stage 2: Production
FROM node:24-alpine
WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install --production

# Copy only the compiled JS from the builder stage
COPY --from=builder /usr/src/app/dist ./dist

EXPOSE 8080
CMD ["npm","run","start"]