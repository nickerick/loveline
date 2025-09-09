# TODO: Make a production ready Dockerfile

FROM node:24-alpine

# Set working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# TEMP: Copy the Telepact package tarball
COPY telepact-1.0.0-alpha.105.tgz ./

# Install dependencies including devDependencies
RUN npm install

# Expose server port
EXPOSE 8080

# Start server in watch mode
CMD ["npm","run","dev"]
