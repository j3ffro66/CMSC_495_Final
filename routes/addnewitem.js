import express from 'express';
import {__dirname} from "../app.js";

const router = express.Router();


router.get('/', (req, res, err) => {
    res.sendFile(__dirname + '/views/AddNewItemPage.html');
});


router.post('/', (req, res, err) => {
    res.sendFile(__dirname + '/views/TaskManagementPage.html');
});


export default router;
