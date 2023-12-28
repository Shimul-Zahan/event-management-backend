const express = require('express');
const Task = require('../model/task/task');

const getTask = async (req, res, next) => {
    console.log('hit');
    const email = req.query.email;
    console.log(email);
    const result = await Task.find({email: email});
    res.status(200).json(result);

}

module.exports = getTask;