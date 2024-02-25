import express from 'express';
import {__dirname} from "../app.js";

const router = express.Router();


router.get('/', (req, res, err) => {
    res.sendFile(__dirname + '/views/TaskManagementPage.html');
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
