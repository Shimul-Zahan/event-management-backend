const express = require('express');
const Task = require('../model/task/task');

const addTask = async (req, res, next) => {
    const task = req.body;
    console.log(task)
    const result = await Task.create(task);
    res.status(200).json(result);
    console.log(result);
}

module.exports = addTask;