const express = require('express');
const Task = require('../model/task/task');

const editTasks = async (req, res, next) => {
    const _id = req.params.id;
    const { title, deadline, priority, description, status } = req.body;
    console.log(_id, title, deadline, priority, description, status)
    const result = await Task.updateOne({ _id }, {
        $set: {
            title,
            deadline,
            priority,
            description,
            description,
        }
    });
    res.send(result);
    console.log("edited item", result)
}

module.exports = editTasks;