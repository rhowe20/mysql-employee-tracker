// Dependencies

const inquirer = require('inquirer');
const mysql = require('mysql');
const cTable = require('console.table');

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
            message: 'What would you like to do?',
            choices: [
                'Department',
                'Role',
                'Employee',
                'Update Employee Role',
                'View Departments',
                'View Roles',
                'View Employees',
                'All Done!'
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
                case 'Update Employee Role':
                    updateRole();
                    break;
                case 'View Departments':
                    viewDepartments();
                    break;
                case 'View Roles':
                    viewRoles();
                    break;
                case 'View Employees':
                    viewEmployees();
                    break;
                case 'All Done!':
                    console.log('Finished!');
                    process.exit();
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
            startApp();
    })};

    function addRole(){
        let query = `SELECT * FROM departments`;

        connection.query(query, function (err, res) {
            if (err) throw err;

            const deptChoice = res.map(({ id, name }) => ({
                value: id,
                name: `${id} ${name}`
            }))

        inquirer.prompt([{
            name: 'title',
            type: 'input',
            message: 'What is the title of the role?'
        },{
            name: 'salary',
            type: 'input',
            message: 'What is the salary of the role?'
        },{
            name: 'departmentId',
            type: 'input',
            message: 'What is the department ID is this role a part of?',
            choices: [
                deptChoice
            ]
        }])
        .then((answer) =>{
            let role = 'INSERT INTO role SET ?';
            connection.query(role, 
                {   title: answer.title, 
                    salary: parseInt(answer.salary), 
                    department_id: parseInt(answer.departmentId)}, 

                function (err, res){
                if (err) throw err;
                startApp();
            })
        })
    })};

    function addEmployee(){
        inquirer.prompt([{
            name: 'firstName',
            type: 'input',
            message: 'What is the first name of the employee?'
        },{
            name: 'lastName',
            type: 'input',
            message: 'What is the last name of the employee?'
        },{
            name: 'roleId',
            type: 'input',
            message: 'What is the role ID of the employee?'
        },{
            name: 'managerId',
            type: 'input',
            message: 'What is the manager ID of the employee?'
        }])
        .then((answer) =>{
            let role = 'INSERT INTO employee SET ?';
            connection.query(role, 
                {   first_name: answer.firstName, 
                    last_name: answer.lastName, 
                    role_id: parseInt(answer.roleId),
                    manager_id: parseInt(answer.managerId)},

                function (err, res){
                if (err) throw err;
                startApp();
            })
        })
    };

    function updateRole(){
        let employeeQuery = `SELECT id FROM employee`;

        connection.query(employeeQuery, function (err, res) {
            if (err) throw err;
        inquirer.prompt([{
            name: 'who',
            type: 'list',
            choices(){
                const choiceArray = [];
                res.forEach(({ id }) => {
                    choiceArray.push(id);
                });
                return choiceArray;
            },
            message: 'Which employee, based off of their employee ID, would you like to update?',
        },{
            name: 'roleNumber', 
            type: 'input',
            message: 'What is the new role ID for the employee?'
        }
        ])
        .then((answer) =>{
            let updatedEmployee = answer.who;
            let newId = parseInt(answer.roleNumber)
            connection.query(`UPDATE employee SET role_id = ${newId} WHERE id = ${updatedEmployee}`,
                function (err, res){
                if (err) throw err;
                startApp();
            })
        })
})
    }
    
    function viewDepartments(){
        connection.query(`SELECT * FROM departments`, function (err, res){
            if (err) throw err
            console.table(res);
            startApp();
    })
    }

    function viewRoles(){
        connection.query(`SELECT * FROM role`, function (err, res){
            if (err) throw err
            console.table(res);
            startApp();
        })
    }

    function viewEmployees(){
        connection.query(`SELECT * FROM employee`, function (err, res){
            if (err) throw err
            console.table(res);
            startApp();
        })
    }