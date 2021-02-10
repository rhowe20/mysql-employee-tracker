DROP DATABASE IF EXISTS employee_trackerDB;

USE employee_trackerDB;

INSERT INTO departments (name) 
VALUES ('Art');

INSERT INTO departments (name) 
VALUES ('Engineer');

INSERT INTO role (title, salary, department_id) 
VALUES ('Head Teacher', 45.00, 1);

INSERT INTO role (title, salary, department_id) 
VALUES ('Head Engineer', 50.00, 2);

INSERT INTO employee (first_name, last_name, role_id)
VALUES ('Becca', 'Berger-Howe', 2);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Matt', 'Berger', 1, 1);

