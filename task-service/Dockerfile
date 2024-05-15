# Use the official Node.js 14 image as base
FROM node:16

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .



# Expose the port that the app runs on
EXPOSE 4000

# Command to run the application
CMD ["node", "index.js"]
