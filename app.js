//const express = require('express');
import express from 'express';
import path from 'path';
import {fileURLToPath} from 'url';
import fs from 'fs';
import indexRouter from './routes/index.js';
import registerRouter from './routes/register.js';
import loginRouter from './routes/login.js';
import taskManagementRouter from './routes/taskmanagement.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));
//app.use(cookieParser());


const __filename = fileURLToPath(import.meta.url);
export const __dirname = path.dirname(__filename);

app.use(express.static(__dirname + '/public'));

// Used to log requests to the server
let middleLogger = (req, res, next) => {
    let current_datetime = new Date();
    let formatted_date = current_datetime.getFullYear() + "-" + (current_datetime.getMonth() + 1) + "-" + current_datetime.getDate() + " " + current_datetime.getHours() + ":" + current_datetime.getMinutes() + ":" + current_datetime.getSeconds();
    let method = req.method;
    let url = req.url;
    let status = res.statusCode;
    let log = `[${formatted_date}] ${method}:${url} ${status}`;
    console.log(log);
    fs.appendFile("request_logs.txt", log + "\n", err => {
        if (err) {
            console.log(err);
        }
    });
    next();
};

app.use(middleLogger);


app.use('/', indexRouter);
app.use('/signup', registerRouter);
app.use('/login', loginRouter);
app.use('/taskmanagementpage', taskManagementRouter);


export default app;
