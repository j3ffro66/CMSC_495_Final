import express from 'express';
import {__dirname} from "../app.js";

const router = express.Router();

let message = '';
router.get('/', (req, res, err) => {
    res.sendFile(__dirname + '/views/login.html');
});

router.post('/', (req, res, err) => {
    const {email, password} = req.body;
    //let status = authController({email, password});

    //console.log(status);
    res.sendFile(__dirname + '/views/TaskManagementPage.html');


    /*
    if (success === true) {
        res.render('taskmanagementpage', {message: 'Successfully signed in!'});
    } else {
        res.render('login', {message: 'Incorrect password!'});
    }

     */
    /*
    const { email, password} = req.body

    console.log(email)
    console.log(password)
    res.render('taskmanagementpage')



    if (password === "jeff"){
        res.render('taskmanagementpage',{message: 'Successfully signed in!'});
    }
    else {
        res.render('login',{message: 'Incorrect password!'})
    }

    */
});

export default router;
//module.exports = router;