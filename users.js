import mysql from 'mysql2'
import dotenv from 'dotenv'
dotenv.config()

//get Connection
export const pool = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
}).promise()



//Create
export async function createUser(email, password){
    const [result] = await pool.query(
        'INSERT INTO users (email, password) VALUES (?, ?)'
    , [email, password])
    const id = result.insertId
    return getUserById(id)
}

// const result = await createUser('sakana@gmail.com', 'sakanapass')
// console.log(result)


//Read

export async function getUsers(){
    const [rows] = await pool.query("SELECT * FROM users")
    return rows
}

export async function getUserById(id){
    const [rows] = await pool.query(
        'SELECT * FROM users WHERE userId= ?'
    , [id] )
    return rows
}

// const user = await getUserById(101001)
// console.log(user)

