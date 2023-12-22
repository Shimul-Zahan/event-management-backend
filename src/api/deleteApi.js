const express = require('express');
const Task = require('../model/task/task');

const deleteTask = async (req, res, next) => {
    const _id = req.params.id;
    console.log(_id)
    const result = await Task.deleteOne({_id});
    res.status(200).json(result);
    console.log(result);
}

module.exports = deleteTask;