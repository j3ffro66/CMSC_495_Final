import mysql from 'mysql2'
import dotenv from 'dotenv'

dotenv.config()

//get Connection
export default function  pool () {

    mysql.createPool({
        host: process.env.MYSQL_HOST,
        user: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASSWORD,
        database: process.env.MYSQL_DATABASE
    }).promise()
}


//Create
export async function createTask(title, description, userId) {
    const [result] = await pool.query(
        'INSERT INTO tasks (title, description, userId) VALUES (? ,? , ?)'
        , [title, description, userId])
    const id = result.insertId
    return getTaskByTId(id)
}

// const result = await createTask('maya Building', '', 101022)
// console.log(result)


//Read

export async function getTasks() {
    const [rows] = await pool.query("SELECT * FROM tasks")
    return rows
}

export async function getTaskByTId(taskId, userId) {
    const [rows] = await pool.query(
        'SELECT * FROM tasks WHERE taskId= ?'
        , [taskId])
    return rows
}

export async function getTaskByUId(userId) {
    const [rows] = await pool.query(
        'SELECT * FROM tasks WHERE userId= ?'
        , [userId])
    return rows
}

export async function getTaskByDate(date) {
    const [rows] = await pool.query(
        'SELECT * FROM tasks WHERE dueDate= ?'
        , [date])
    return rows
}

export async function getTaskByStatus(status) {
    const [rows] = await pool.query(
        'SELECT * FROM tasks WHERE status= ?'
        , [status])
    return rows
}

export async function getTaskByPriority(priority) {
    const [rows] = await pool.query(
        'SELECT * FROM tasks WHERE priority= ?'
        , [priority])
    return rows
}

// const task = await getTaskByPriority("1")
// console.log(task)