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
    connection.connect((err) => {
        if (err) throw err;
        startApp();
    });

    function startApp(){
        inquirer.prompt({
            name: 'start',
            type: 'list',
            message: 'What would you like to add?',
            choices: [
                'Department',
                'Role',
                'Employee'
        ]
        })
        .then((answer) => {
            switch (answer.start){
                case 'Department':
                    addDepartment();
                    break;
                case 'Role':
                    addRole();
                    break;
                case 'Employee':
                    addEmployee();
                    break;
            }
        }
    )}

    function addDepartment(){
        inquirer.prompt({
            name: 'name',
            type: 'input',
            message: 'What is the department name?'
        })
        .then((answer) =>{
            let deptQuery = 'INSERT INTO departments (name) values (?)';
            connection.query(deptQuery, answer.name, function (err, res){
                if (err) throw err;
                console.log(`${answer.name} has been added!`)
            })
    })};

    function addRole(){

    };

    function addEmployee(){

    };


// create prompts to collect data
// push data to array
// push array to mysql database



// if they choose department, ask for name
// if they choose role, ask for title, salary, and department id
// if they choose employee, first name, last name, role id, and manager id