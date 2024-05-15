# Use a specific version of Node.js (e.g., LTS version 14)
FROM node:16

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Install grpc
RUN npm install grpc

# Copy the rest of the application code
COPY . .

# Copy the grpc directory (including user.proto) into the container


# Expose port 3000 (or your desired port)
EXPOSE 3000

# Command to run the application
CMD ["node", "index.js"]
