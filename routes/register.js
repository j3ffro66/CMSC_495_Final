import express from 'express';
//const users = require('../controllers/userController.js');

const router = express.Router();

let message = '';


router.get('/', (req, res, err) => {
    res.render('signup', {message})
});

router.post('/', (req, res, err) => {
    const {email, password, passwordconfirm} = req.body;

    /*
    if (passwords dont match)

    else if (password not complex)

    else if (email != user in db)
        users.createUser({email, password});
        res.render('login', {message: 'User successfully created!'} )

     */
});


export default router;