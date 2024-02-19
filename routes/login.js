const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController.js');

let message = '';

router.get('/', (req, res, err) => {
    res.render('login', {message})
});

router.post('/', (req, res, err) => {
    const {email, password} = req.body;
    authController.login({email, password});



    console.log(status)

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

module.exports = router;