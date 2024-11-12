# Use an official Node.js runtime as a parent image
FROM node:16

# Set the working directory
WORKDIR /opt/pelak

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the React app
RUN npm run build

# Use nginx to serve the built app
FROM nginx:1.21-alpine
COPY --from=0 /opt/pelak/build /usr/share/nginx/html

# Expose port 80 to the outside world
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
