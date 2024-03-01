// Import the required modules
import express from 'express';
import {__dirname} from "../app.js";

const router = express.Router();

//Getter method to show main page
router.get('/', function (req, res) {
    res.sendFile((__dirname + '/views/index.html'));
});

router.post('/', function (req, res) {
    res.redirect('/signup');
});
export default router;
