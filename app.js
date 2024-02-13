import express from "express";
import {
    createUser,
    getUsers,
    getUserById
} from "./user.js"
import {createTask, getTaskByTId, getTaskByUId, getTasks} from "./task.js";

const app = express()
const fs = require('fs');

let middleLogger = (req, res, next) => {
    let current_datetime = new Date();
    let formatted_date =
        current_datetime.getFullYear() +
        "-" +
        (current_datetime.getMonth() + 1) +
        "-" +
        current_datetime.getDate() +
        " " +
        current_datetime.getHours() +
        ":" +
        current_datetime.getMinutes() +
        ":" +
        current_datetime.getSeconds();
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

app.use(express.json())

//@desc Create user
//@route POST /user
//@access public
app.post("/users", async function asyncRouteHandler(req, res, next) {
    try {
        const {email, password} = req.body
        const user = await createUser(email, password)
        res.status(201).send(user)
    } catch (err) {
        return next(err);
    }
});

app.get("/", (req, res) => {
    res.send("This is the home Page");
});

//@desc Get users
//@route GET /users
//@access public
app.get("/users", async (req, res) => {
    try{
        const {email, password} = req.body
        const users = await getUsers()
        res.send(users)
    } catch (err){
        return next(err);
    }
});


//@desc Get user
//@route GET /user/:id
//@access public
app.get("/users/:id", async (req, res) => {
    const id = req.params.id
    const user = await getUserById(id)
    res.send(user)
})

//=======================================task=====================================


//@desc Create task
//@route POST /task
//@access public
app.post("/tasks", async (req, res) => {
    const {title, description, userId} = req.body
    const task = await createTask(title, description, userId)
    res.status(201).send(task)
})


//@desc Get tasks
//@route GET /tasks
//@access public
app.get("/tasks", async (req, res) => {
    const {title, description, priority, status, userId} = req.body
    const tasks = await getTasks()
    res.send(tasks)
})

//@desc Get tasks
//@route GET /tasks/:id
//@access public
app.get("/tasks/:id", async (req, res) => {
    const id = req.params.id
    const task = await getTaskByTId(id)
    res.send(task)
})


//@dec Error Handler
app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('error')
})

app.listen(5000, () => {
    console.log('Server is running on port 5000')
})