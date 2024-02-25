import express from 'express';
const router = express.Router();
import {__dirname} from "../app.js";

//Getter method to show main page
router.get('/',function(req,res){
    res.sendFile(__dirname + '/views/index.html');
});

export default router;
