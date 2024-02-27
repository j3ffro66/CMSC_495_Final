import express from 'express';
import {__dirname} from "../app.js";
import authController from "../controllers/authController.js";

const router = express.Router();

let message = '';
router.get('/', (req, res, err) => {


    console.log('Cookies: ', req.cookies['token'])
    console.log('Cookies: ', req.cookies['email'])
    res.sendFile(__dirname + '/views/login.html');
});

router.post('/', async (req, res, err) => {
    const {email, password} = req.body;
    let token = await authController({email, password});
    //console.log(email, password);
    //console.log(token);
    //res.sendFile(__dirname + '/views/TaskManagementPage.html');

    if (token === null) {
        res.sendFile(__dirname + '/views/login.html');
    } else {
        res.cookie('token', token)
            .cookie('email', email)
            //res.setHeader('Authorization', 'You are authorized.')
            //res.setHeader('token', token)
            .sendFile(__dirname + '/views/TaskManagementPage.html');
    }


});

export default router;
//module.exports = router;