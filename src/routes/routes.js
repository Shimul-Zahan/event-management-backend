const express = require('express');
const addTask = require('../api/taskAddApi');
const getTask = require('../api/taskGetApi');
const updateTasks = require('../api/updateTask');
const router = express.Router();

router.get('/all-task', getTask);
router.post('/add-task', addTask);
router.patch('/update/:id', updateTasks)

module.exports = router;