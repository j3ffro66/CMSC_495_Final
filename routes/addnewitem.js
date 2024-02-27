import express from 'express';
import {__dirname} from "../app.js";
import verifyjwt from "../controllers/verifyController.js";

const router = express.Router();


router.get('/', async (req, res, err) => {
    let authorized = await verifyjwt();
    if (authorized === null) {
        res.sendFile(__dirname + '/views/login.html');
    } else {
        res.sendFile(__dirname + '/views/TaskManagementPage.html');
    }
    //res.sendFile(__dirname + '/views/TaskManagementPage.html');


    //res.sendFile(__dirname + '/views/AddNewItemPage.html');
});


router.post('/', (req, res, err) => {
    res.sendFile(__dirname + '/views/TaskManagementPage.html');
});


export default router;
