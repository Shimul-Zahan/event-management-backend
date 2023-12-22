const express = require('express');
const addTask = require('../api/taskAddApi');
const getTask = require('../api/taskGetApi');
const updateTasks = require('../api/updateTask');
const deleteTask = require('../api/deleteApi');
const editTasks = require('../api/editTask');
const router = express.Router();

router.get('/all-task', getTask);
router.post('/add-task', addTask);
router.patch('/update/:id', updateTasks)
router.delete('/delete/:id', deleteTask);
router.patch('/edit-task/:id', editTasks);

module.exports = router;