# MySQL Employee Data Tracker

Welcome to the Employee Data Tracker! This app allows employers to track employee information such as role, name, and department location. 

For a full walkthrough video of the app, please full the link below!

https://youtu.be/ab-Bp5bQGtA

## Installation

To install the app, the user will need to add three JSON packages.
``bash
console.table
inquirer
mysql
``

Once these have been installed, the user is ready to start the app! Simply open the index.js file in the terminal, then write node index.js and the user will be prompted questions to begin.

## Usage

Once the app has been initialized, the user can select any of the following selections to start. Users can add departments, roles, and employees, update an employee role, view departments, roles, and employees, or end the app.

!['Start App'](https://github.com/rhowe20/mysql-employee-tracker/blob/main/images/starting-app.png)

If the user selects an option to add a department, role, or employee, they will be prompted a series of questions to do so. Once this has been done, the information is stored in the MySQL database to be used later.

!['Add Department'](https://github.com/rhowe20/mysql-employee-tracker/blob/main/images/add-dept.png)

The user is able to change the role ID of any given employee so that the employee's information can be accurately reflected in their database.

!['Change Role ID'](https://github.com/rhowe20/mysql-employee-tracker/blob/main/images/change-roleID.png)

The user at any point can view the data they have added to their database. They can view each table individually or they can see them all at once. Once they are finished adding the information they want, they can then end the app by selecting 'All Done!'.

!['View Data and End'](https://github.com/rhowe20/mysql-employee-tracker/blob/main/images/view-data-and-finish.png)

## Code

This app utilized many functions that worked interchangably together. It used inquirer as well as MySQL to function properly.

The dependencies are added first. Then the connection to the MySQL database is created.

!['Dependencies'](https://github.com/rhowe20/mysql-employee-tracker/blob/main/images/add-dependencies.png)

The startApp() function prompts the intial questions to take the user from function to function. It then uses the switch method to go to the correct functions when prompted.

!['Initialize'](https://github.com/rhowe20/mysql-employee-tracker/blob/main/images/initialize.png)

Below is an example of the add functions used to add departments, roles, and employees. 

!['Add Function'](https://github.com/rhowe20/mysql-employee-tracker/blob/main/images/add-function.png)

The updateRole() function is used to update the role ID number of any given employee when selected. 

!['Update Role ID'](https://github.com/rhowe20/mysql-employee-tracker/blob/main/images/update-roleID-function.png)

The functions below allow the user to view any of the data collected.

!['View Functions'](https://github.com/rhowe20/mysql-employee-tracker/blob/main/images/view-functions.png)

## Future Updates

Eventually, we would love the user to be able to delete data from the table or make more changes.