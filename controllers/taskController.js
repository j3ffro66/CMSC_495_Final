import pool from '../server.js'
import req from "express/lib/request.js";


//Create a task
export async function createTask(title, description, dueDate, priority, userId) {
    return new Promise(function (resolve) {
        //pool.query('INSERT INTO tasks (title, description, dueDate, priority, status, userId) VALUES (?, ?, ?, ?, ?, ?)', [title, description, dueDate, priority, 'in progress', '101016'] )
        pool.query('INSERT INTO tasks (title, description, dueDate, priority, status, userId) VALUES (?, ?, ?, ?, ?, ?)'
            , [title, description, dueDate, priority, 'in progress', userId])
        resolve('created')
    })
}

//Read

export async function getTasks() {
    return new Promise(function (resolve){
        pool.query("SELECT * FROM tasks", function (err, rows) {
            resolve(rows)
        })
        }
    )
}


export async function getTaskByTId(taskId, userId) {
    const [rows] = await pool.query('SELECT * FROM tasks WHERE taskId= ?', [taskId])
    return rows
}

export async function getTaskByUId(userId) {
    const [rows] = await pool.query('SELECT * FROM tasks WHERE userId= ?', [userId])
    return rows
}

export async function getTaskByDate(date) {
    const [rows] = await pool.query('SELECT * FROM tasks WHERE dueDate= ?', [date])
    return rows
}

export async function getTaskByStatus(status) {
    const [rows] = await pool.query('SELECT * FROM tasks WHERE status= ?', [status])
    return rows
}

export async function getTaskByPriority(priority) {
    const [rows] = await pool.query('SELECT * FROM tasks WHERE priority= ?', [priority])
    return rows
}

// const task = await getTaskByPriority("1")
// console.log(task)