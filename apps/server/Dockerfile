FROM node:24-alpine

# Set working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

COPY telepact-1.0.0-alpha.105.tgz ./

# Install dependencies including devDependencies
RUN npm install

# Install tsx globally (optional)
RUN npm install -g tsx

# Expose server port
EXPOSE 8080

# Start server in watch mode
CMD ["npm","run","dev"]
