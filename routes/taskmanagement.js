//const express = require('express');
import express from 'express';
const router = express.Router();
//const tasks = require('../controllers/taskController.js');
import tasks from '../controllers/taskController.js';



router.get('/', (req, res, err) => {
    var tasklist = tasks.getTasks()
    res.render('taskmanagementpage', tasklist)
});

router.post('/', (req, res, err) => {
    const {title, description} = req.body;
    //const userId =
    tasks.createTask(title, description, userId);
    res.render('taskmanagementpage')
});


export default router;
