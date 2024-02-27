// Import the required modules
import express from 'express';
import {__dirname} from "../app.js";

const router = express.Router();

//Getter method to show task management page
router.get('/', async (req, res, err) => {
    //Checks to see if the session is valid
    if (req.session.user === undefined) {
        res.redirect('/login')
    } else {
        /*
        NEED SQL CODE TO QUERY TASKS FROM DATABASE
         */
        res.sendFile(__dirname + '/views/TaskManagementPage.html');
    }
});

/*
router.post('/', (req, res, err) => {
    const {title, description} = req.body;
    //const userId =
    tasks.createTask(title, description, userId);
    res.render('taskmanagementpage')
});

 */


export default router;
