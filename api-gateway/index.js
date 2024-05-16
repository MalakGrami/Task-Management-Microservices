const grpc = require('@grpc/grpc-js');

const express = require('express');
const bodyParser = require('body-parser');
const userServiceClient = require('./userClient');
const taskServiceClient = require('./taskServiceClient');


const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

// gRPC endpoints
app.get('/users', (req, res) => {
    userServiceClient.GetAllUsers({}, (err, response) => {
        if (err) {
            console.error('Error fetching users:', err);
            res.status(500).json({ error: 'Failed to fetch users' });
        } else {
            res.json(response);
        }
    });
});

app.get('/users/:id', (req, res) => {
    userServiceClient.GetUserById({ id: req.params.id }, (err, response) => {
        if (err) {
            console.error('Error fetching user:', err);
            res.status(500).json({ error: 'Failed to fetch user' });
        } else {
            res.json(response);
        }
    });
});

app.post('/users', (req, res) => {
    userServiceClient.CreateUser(req.body, (err, response) => {
        if (err) {
            console.error('Error creating user:', err);
            res.status(500).json({ error: 'Failed to create user' });
        } else {
            res.json(response);
        }
    });
});

app.put('/users/:id', (req, res) => {
    const { id } = req.params;
    userServiceClient.UpdateUser({ id, ...req.body }, (err, response) => {
        if (err) {
            console.error('Error updating user:', err);
            res.status(500).json({ error: 'Failed to update user' });
        } else {
            res.json(response);
        }
    });
});

app.delete('/users/:id', (req, res) => {
    userServiceClient.DeleteUser({ id: req.params.id }, (err, response) => {
        if (err) {
            console.error('Error deleting user:', err);
            res.status(500).json({ error: 'Failed to delete user' });
        } else {
            res.json(response);
        }
    });
});


app.get('/tasks', (req, res) => {
    // Make gRPC call to fetch tasks
    taskServiceClient.GetAllTasks({}, (err, response) => {
        if (err) {
            console.error('Error fetching tasks:', err);
            res.status(500).json({ error: 'Failed to fetch tasks' });
        } else {
            res.json(response);
        }
    });
});

app.get('/tasks/:id', (req, res) => {
    // Make gRPC call to fetch task by ID
    taskServiceClient.GetTaskById({ id: req.params.id }, (err, response) => {
        if (err) {
            console.error('Error fetching task:', err);
            res.status(500).json({ error: 'Failed to fetch task' });
        } else {
            res.json(response);
        }
    });
});

app.post('/tasks', (req, res) => {
    // Make gRPC call to create task
    taskServiceClient.CreateTask(req.body, (err, response) => {
        if (err) {
            console.error('Error creating task:', err);
            res.status(500).json({ error: 'Failed to create task' });
        } else {
            res.json(response);
        }
    });
});

app.put('/tasks/:id', (req, res) => {
    // Make gRPC call to update task
    const { id } = req.params;
    taskServiceClient.UpdateTask({ id, ...req.body }, (err, response) => {
        if (err) {
            console.error('Error updating task:', err);
            res.status(500).json({ error: 'Failed to update task' });
        } else {
            res.json(response);
        }
    });
});

app.delete('/tasks/:id', (req, res) => {
    // Make gRPC call to delete task
    taskServiceClient.DeleteTask({ id: req.params.id }, (err, response) => {
        if (err) {
            console.error('Error deleting task:', err);
            res.status(500).json({ error: 'Failed to delete task' });
        } else {
            res.json(response);
        }
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});