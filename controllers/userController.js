import pool from '../server.js'

//Create
export async function createUser(email, password) {
    const [result] = await pool.query(
        'INSERT INTO users (email, password) VALUES (?, ?)'
        , [email, password])
    const id = result.insertId
    return getUserById(id)
}

// const result = await createUser('sakana@gmail.com', 'sakanapass')
// console.log(result)


//Read

export async function getUserById(id) {
    const [rows] = await pool.query(
        'SELECT * FROM users WHERE userId= ?'
        , [id])
    return rows
}

// const user = await getUserById(101001)
// console.log(user)

export default createUser;
