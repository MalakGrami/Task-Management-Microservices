const Task = require('./taskModel');
const mongoose = require('./db');

module.exports = {
    Query: {
        tasks: async () => {
            try {
                return await Task.find();
            } catch (error) {
                throw new Error('Failed to fetch tasks');
            }
        },
        task: async (_, { id }) => {
            try {
                return await Task.findById(id);
            } catch (error) {
                throw new Error('Failed to fetch task');
            }
        },
    },
    Mutation: {
        createTask: async (_, { title, description, completed }) => {
            try {
                const task = new Task({ title, description, completed });
                await task.save();
                return task;
            } catch (error) {
                throw new Error('Failed to create task');
            }
        },
        updateTask: async (_, { id, title, description, completed }) => {
            try {
                return await Task.findByIdAndUpdate(id, { title, description, completed }, { new: true });
            } catch (error) {
                throw new Error('Failed to update task');
            }
        },
        deleteTask: async (_, { id }) => {
            try {
                return await Task.findByIdAndDelete(id);
            } catch (error) {
                throw new Error('Failed to delete task');
            }
        },
    },
};
