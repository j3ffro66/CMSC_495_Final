import express from 'express';
import {__dirname} from "../app.js";
import verifyjwt from "../controllers/verifyController.js";

const router = express.Router();


router.get('/', async (req, res, err) => {

    let authorized = await verifyjwt();
    console.log(authorized)
    if (authorized === null) {
        console.log('4')
        res.sendFile(__dirname + '/views/login.html');
    } else {
        res.sendFile(__dirname + '/views/TaskManagementPage.html');
    }
    //res.sendFile(__dirname + '/views/TaskManagementPage.html');
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
