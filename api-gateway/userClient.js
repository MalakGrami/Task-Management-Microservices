const grpc = require('grpc');
const protoLoader = require('@grpc/proto-loader');

// Update the service URLs to use the service names defined in Docker Compose
const userServiceHost = process.env.USER_SERVICE_HOST || 'user-service'; // Docker Compose service name
const userServicePort = process.env.USER_SERVICE_PORT || '50051';

try {
  const packageDefinition = protoLoader.loadSync('user.proto', {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true,
  });

  const userServiceProto = grpc.loadPackageDefinition(packageDefinition).UserService;
  const userServiceClient = new userServiceProto(`${userServiceHost}:${userServicePort}`, grpc.credentials.createInsecure());

  module.exports = userServiceClient;
} catch (error) {
  console.error('Error creating gRPC client:', error);
  
}
