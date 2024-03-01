// Import the required modules
import express from 'express';
import {__dirname} from "../app.js";
import {getTasks} from "../controllers/taskController.js";

const router = express.Router();

//Getter method to show task management page
router.get('/', async (req, res, err) => {
    //Checks to see if the session is valid
    if (req.session.user === undefined) {
        res.redirect('/login')
    } else {
        let taskList = await getTasks()


        //res.render('taskmanagement', { title: 'Task List', userData: taskList });
        res.sendFile((__dirname + '/views/TaskManagementPage.html'));
    }
})


/*
router.post('/', (req, res, err) => {
    const {title, description} = req.body;
    //const userId =
    tasks.createTask(title, description, userId);
    res.render('taskmanagementpage')
});

 */


export default router;
