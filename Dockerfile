# Stage 1: Build React app
FROM node:18-alpine AS build

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Serve with a lightweight static server
FROM node:18-alpine

WORKDIR /app
RUN npm install -g serve

# Copy only the build output
COPY --from=build /app/build ./build

# Expose port 3000
EXPOSE 3000

# Start static server
CMD ["serve", "-s", "build", "-l", "3000"]

