const { Schema, model } = require('mongoose');

const taskSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    priority: {
        type: String,
        required: true,
    },
    deadline: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
});

const Task = model('Task', taskSchema);
module.exports = Task;