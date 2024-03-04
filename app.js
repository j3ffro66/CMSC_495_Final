// Import the required modules
import express from 'express';
import path from 'path';
import {fileURLToPath} from 'url';
import fs from 'fs';
import indexRouter from './routes/index.js';
import signupRouter from './routes/signup.js';
import loginRouter from './routes/login.js';
import logoutRouter from './routes/logout.js';
import taskManagementRouter from './routes/taskmanagement.js';
import inttaskManagementRouter from './routes/taskmanagement.js';
import addnewitemRouter from './routes/addnewitem.js';
import cookieParser from 'cookie-parser'
import session from 'express-session';
import * as dotenv from 'dotenv';
import {currentUser} from "./routes/login.js";

import ejs from 'ejs';

dotenv.config();
const app = express();


app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());



// 5 minute logout timer
const sessionTimer = 1000 * 30 * 5;

//session middleware
app.use(session({
    name: '_taskmanagement',
    secret: process.env.SESSION_SECRET,
    saveUninitialized: true,
    cookie: {maxAge: sessionTimer},
    resave: false
}));

//Used to get system filepath
const __filename = fileURLToPath(import.meta.url);
export const __dirname = path.dirname(__filename);
app.use(express.static(__dirname + '/public'));
app.engine('html', ejs.renderFile);
app.set('view engine', 'html');


// Used to log requests to the server Data, type, url, status, who
let middleLogger = (req, res, next) => {
    let current_datetime = new Date();
    let formatted_date = current_datetime.getFullYear()
        + "-" + (current_datetime.getMonth() + 1)
        + "-" + current_datetime.getDate()
        + " " + current_datetime.getHours()
        + ":" + current_datetime.getMinutes()
        + ":" + current_datetime.getSeconds();
    let method = req.method;
    let url = req.url;
    let status = res.statusCode;
    let log = `[${formatted_date}] | ${method}:${url} | ${status} | User ID: ${currentUser}`;
    console.log(log);
    fs.appendFile("request_logs.txt", log + "\n", err => {
        if (err) {
            console.log(err);
        }
    });
    next();
};
app.use(middleLogger);


//Use the middleware routers to navigate pages
app.use('/', indexRouter);
app.use('/signup', signupRouter);
app.use('/login', loginRouter);
app.use('/logout', logoutRouter);
app.use('/taskmanagementpage', taskManagementRouter);
app.use('/inttaskmanagementpage', inttaskManagementRouter);

app.use('/addnewitem', addnewitemRouter);

//Catch all route to redirect to the main page if a not defined route is attempted
app.get('*', function(req, res) {
    if (req.url !== ('/' || 'signup'
        || '/login' || '/logout'
        || '/taskmanagementpage' || '/addnewitem')) res.redirect('/');
});

export default app;
