# Base image
FROM node:18-alpine AS builder

# Instalacja zależności systemowych, w tym texlive
RUN apk update


# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application
COPY . .

# Build the application
RUN npm run build

# Expose the port Next.js uses
EXPOSE 3000

# Run Next.js in production mode
CMD ["npm", "run", "start"]
