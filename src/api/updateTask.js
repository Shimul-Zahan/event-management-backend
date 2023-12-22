const express = require('express');
const Task = require('../model/task/task');
const { ObjectId } = require('mongodb');

const updateTasks = async (req, res) => {
    const _id = req.params.id;
    const query = req.query.query;
    console.log(_id, query)
    let updateQuery;
    if (query === 'ongoing') {
        updateQuery = { $set: { status: 'ongoing' } };
    } else if (query === 'complete') {
        updateQuery = { $set: { status: 'complete' } };
    } else {
        updateQuery = { $set: { status: 'todo' } };
    }

    const result = await Task.updateOne({ _id }, updateQuery);
    res.send(result);
    console.log("from the last", result)
}

module.exports = updateTasks;