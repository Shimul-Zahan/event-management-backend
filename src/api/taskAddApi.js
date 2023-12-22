const express = require('express');
const Task = require('../model/task/task');

const addTask = async (req, res, next) => {
    const task = req.body;
    const result = await Task.create(task);
    res.send(result)
    console.log(result);
}

module.exports = addTask;