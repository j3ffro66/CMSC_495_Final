// Import the required modules
import express from 'express';
import {__dirname} from "../app.js";
import sanitizeHtml from 'sanitize-html';

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
router.post('/', (req, res, err) => {
    // I DON'T THINK THIS WORKS
    const {taskTitle, description, dueDate, priority} = req.body;
    console.log(taskTitle, description, dueDate, priority)

    /*
    NEED SQL CODE TO ADD TASKS FROM DATABASE
    USE taskController.js
     */

    res.redirect('/TaskManagementPage')
});


export default router;
