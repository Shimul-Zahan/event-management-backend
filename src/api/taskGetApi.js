const express = require('express');
const Task = require('../model/task/task');

const getTask = async (req, res, next) => {
    const result = await Task.find();
    res.status(200).json(result);
}

module.exports = getTask;