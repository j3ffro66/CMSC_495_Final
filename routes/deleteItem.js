// Import the required modules
import express from 'express';
import {__dirname} from "../app.js";
import sanitizeHtml from 'sanitize-html';
import {deleteTask} from "../controllers/taskController.js";
import req from "express/lib/request.js";

const router = express.Router();

//Getter method to show add new item page
router.get('/', async (req, res, err) => {
    //Checks to see if the session is valid
    if (req.session.user === undefined) {
        res.redirect('/login')
    } else {
        res.sendFile(__dirname + '/views/DeleteItemPage.html');
    }
});

//POST method to add tasks to database
router.delete('/', async (req, res, err) => {
    // I DON'T THINK THIS WORKS
    // const {taskTitle, description, dueDate, priority} = req.body;
    const userId = req.session.user
    console.log(taskTitle, description, dueDate, priority, userId, taskId)
    let deleteTask = await deleteTask(taskId)

    if (addTask === 'deleted') {
        console.log('deleted')
        res.redirect('/taskmanagementpage');//already delete
    } else  {
        console.log('not delete')
        res.redirect('/deleteItem');
    }
  

});


export default router;
