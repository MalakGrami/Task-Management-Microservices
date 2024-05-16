const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');

const packageDefinition = protoLoader.loadSync('task.proto', {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true,
});

const taskServiceProto = grpc.loadPackageDefinition(packageDefinition).TaskService;


const taskServiceName = 'task-service';

const taskServiceClient = new taskServiceProto(`${taskServiceName}:4000`, grpc.credentials.createInsecure());

module.exports = taskServiceClient;
