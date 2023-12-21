const express = require('express');
const addTask = require('../api/taskAddApi');
const getTask = require('../api/taskGetApi');
const router = express.Router();

router.get('/all-task', getTask);
router.post('/add-task', addTask);

module.exports = router;