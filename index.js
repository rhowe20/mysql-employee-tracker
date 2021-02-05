// Dependencies

const inquirer = require('inquirer');
const mysql = require('mysql');


// mysql connection

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'Fru1tBa$ket',
    database: 'employee_trackerDB'
});
console.log(connection)
    connection.connect((err) => {
        if (err) throw err;
    });

// inquirer prompt
// const questions = () => {

//     inquirer.prompt([
//         {

//         }
//     ]);
// }

// create prompts to collect data
// push data to array
// push array to mysql database