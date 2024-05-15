const grpc = require('grpc');
const protoLoader = require('@grpc/proto-loader');

const userServiceURL = process.env.USER_SERVICE_URL || 'localhost';
const userServicePort = process.env.USER_SERVICE_PORT || '50051';

const packageDefinition = protoLoader.loadSync('user.proto', {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true,
});

const userServiceProto = grpc.loadPackageDefinition(packageDefinition).UserService;
const userServiceClient = new userServiceProto(`${userServiceURL}:${userServicePort}`, grpc.credentials.createInsecure());

module.exports = userServiceClient;
