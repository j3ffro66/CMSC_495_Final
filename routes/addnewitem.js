// Import the required modules
import express from 'express';
import {__dirname} from "../app.js";
import sanitizeHtml from 'sanitize-html';
import {createTask} from "../controllers/taskController.js";
import req from "express/lib/request.js";

const router = express.Router();

//Getter method to show add new item page
router.get('/', async (req, res, err) => {
    //Checks to see if the session is valid
    if (req.session.user === undefined) {
        res.redirect('/login')
    } else {
        res.sendFile(__dirname + '/views/AddNewItemPage.html');
    }
});

//POST method to add tasks to database
router.post('/', async (req, res, err) => {
    // I DON'T THINK THIS WORKS
    const {taskTitle, description, dueDate, priority} = req.body;
    const userId = req.session.user
    console.log(taskTitle, description, dueDate, priority, userId)
    let addTask = await createTask(taskTitle, description, dueDate, priority, userId)

    if (addTask === 'created') {
        console.log('created')
        res.redirect('/taskmanagementpage');//email in use
    } else  {
        console.log('not created')
        res.redirect('/addnewitem');
    }
    /*
    NEED SQL CODE TO ADD TASKS FROM DATABASE
    USE taskController.js
     */

});


export default router;
