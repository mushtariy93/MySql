-- Active: 1722832255116@@127.0.0.1@3306@project
SHOW DATABASES

CREATE DATABASE if not EXISTS lesson

use lesson

SHOW TABLES

CREATE TABLE department (id INT(11)PRIMARY KEY,name VARCHAR (32))

DESCRIBE department


DESCRIBE department

INSERT INTO department (id, name) VALUES (2, "Dizayn")

SELECT * FROM department

DELETE FROM department --ichini bo'shatish

DROP TABLE department 

CREATE TABLE department (id INT(11) AUTO_INCREMENT, name VARCHAR(100), PRIMARY KEY(id))

DESCRIBE department

INSERT INTO department (id, name) VALUES (2, "Dizayn")

SELECT * FROM department

INSERT INTO department (name) VALUES ( "Dasturlash")

DELETE FROM department --faqat elementlarini o'chiradi

TRUNCATE department; --id ni ham o'chiradi

INSERT IGNORE department (id, name) VALUES (1, "Dasturlash") --mavjud bo'lsa qo'shmaydi, lekin error bermidi

INSERT INTO department set name="Sotuv" --value berish ikkinchi usul

CREATE TABLE IF NOT EXISTS old_workers (
    id INT(11) PRIMARY KEY AUTO_INCREMENT, 
    name VARCHAR(255), 
    role VARCHAR(50), 
    salary DECIMAL(15, 2), 
    birthday DATE
)

DESCRIBE workers

DESCRIBE old_workers

INSERT IGNORE INTO old_workers (name, role, salary, birthday) VALUES
('John Doe1', 'Manager', 50000.00, '1980-05-15'),
('Jane Smith1', 'Developer', 20000.00, '1985-08-25'),
('Bob Johnson1', 'Analyst', 22000.00, '1990-03-10'),
('Alice Williams1', 'Designer', 21000.00, '1994-06-04'),
('Charlie Brown1', 'Tester', 25000.00, '1988-02-13'),
('Eva Davis1', 'Administrator', 24000.00, '1992-03-12'),
('Frank White1', 'Engineer', 15000.00, '1990-11-23');


SELECT *FROM workers



SELECT name,birthday FROM workers 


SELECT name,(salary*2) FROM workers

SELECT *FROM workers WHERE id IN(3,4,5)

SELECT *FROM workers WHERE role IN('Tester','Designer')

SELECT *FROM workers WHERE birthday BETWEEN '1985-08-25' and '1994-06-04'

SELECT id,name from workers WHERE birthday BETWEEN '1885-08-25' AND '1994-06-04'


SELECT *from workers WHERE name LIKE '%a%'

SELECT *FROM workers ORDER BY salary

SELECT *FROM workers ORDER BY  role ASC, salary DESC

SELECT *FROM workers ORDER BY id limit 2 OFFSET 2

SELECT MAX (salary) FROM workers

SELECT Min (salary) FROM workers

SELECT AVG (salary) FROM workers

SELECT *FROM old_workers

select id,name FROM workers
UNION
SELECT id,name FROM old_workers