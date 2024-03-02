import pool from '../server.js'


//Create User Account
export async function createUser(username, password, email) {
    return new Promise(function (resolve) {
        pool.query('SELECT DISTINCT email FROM users WHERE email =  ?', [email], (error, results) => {
            // If there is an issue with the query, output the error
            if (error) throw error;

            if (results.length > 0) {  // If the account exists, do not continue creating account
                resolve('in use')
            } else {//Insert user details into database
                pool.query('INSERT INTO users (username, password, email) VALUES (?, ?,?)'
                    , [username, password, email])
                resolve('created')
            }
        })
    });
}
//Read

export async function getUserById(id) {
    return new Promise(function (resolve) {
        pool.query('SELECT DISTINCT email FROM users WHERE userId =  ?', [id], (error, results) => {
            // If there is an issue with the query, output the error
            if (error) throw error;
            console.log(results)
            resolve(results[0]['email'])
            })

    })
}

// const user = await getUserById(101001)
// console.log(user)

export default createUser;
