-- Active: 1722832255116@@127.0.0.1@3306@lesson
CREATE DATABASE flowers_shop;

DROP DATABASE IF EXISTS flowers_shop;



USE flowers_shop

CREATE  TABLE flowers (
    flower_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50),
    color VARCHAR(30),
    price DECIMAL(10, 2),
    flower_type VARCHAR(50),
    imported_from VARCHAR(50)
)

INSERT INTO flowers (name, color, price, flower_type, imported_from) VALUES
('Rose', 'Red', 2.50, 'Perennial', 'Netherlands'),
('Tulip', 'Yellow', 1.50, 'Bulb', 'Turkey'),
('Lily', 'White', 3.00, 'Perennial', 'USA'),
('Daisy', 'White', 1.00, 'Annual', 'Mexico'),
('Orchid', 'Purple', 4.00, 'Perennial', 'Thailand');

DESCRIBE flowers

SELECT *FROM flowers_shop

CREATE TABLE customers (
    customer_id INT AUTO_INCREMENT PRIMARY KEY,
    fname VARCHAR(50),
    lname VARCHAR(50),
    phone VARCHAR(15),
    address VARCHAR(100),
    email VARCHAR(100)
);


INSERT INTO customers (fname, lname, phone, address, email) VALUES
('John', 'Doe', '1234567890', '123 Elm St', 'john@example.com'),
('Jane', 'Smith', '0987654321', '456 Oak St', 'jane@example.com'),
('Alice', 'Brown', '1122334455', '789 Pine St', 'alice@example.com'),
('Bob', 'White', '6677889900', '101 Maple St', 'bob@example.com'),
('Carol', 'Green', '9988776655', '202 Birch St', 'carol@example.com');

SELECT *FROM customers

CREATE TABLE status (
    status_id INT AUTO_INCREMENT PRIMARY KEY,
    status_name VARCHAR(50)
);

-- Statuslarni qo'shamiz:
INSERT INTO status (status_name) VALUES ('Pending'), ('Processing'), ('Completed'), ('Cancelled'), ('Refunded');


SELECT *FROM status

CREATE TABLE orders (
    order_id INT AUTO_INCREMENT PRIMARY KEY,
    customer_id INT,
    status_id INT,
    order_date DATE,
    FOREIGN KEY (customer_id) REFERENCES customers(customer_id),
    FOREIGN KEY (status_id) REFERENCES status(status_id)
    ON UPDATE SET NULL
    ON DELETE SET NULL
);

-- Misol uchun, 2 ta row qo'shamiz:
INSERT INTO orders (customer_id, status_id, order_date) VALUES (1, 1, '2024-08-01'), (2, 2, '2024-08-02');


SELECT *FROM orders

CREATE TABLE order_details(
    order_detail_id INT AUTO_INCREMENT PRIMARY KEY,
    order_id INT,
    flower_id INT,
    quantity INT,
    FOREIGN KEY (order_id) REFERENCES orders(order_id),
    FOREIGN KEY (flower_id) REFERENCES flowers(flower_id)
    ON UPDATE SET NULL
    ON DELETE SET NULL
);

-- Misol uchun, 2 ta row qo'shamiz:
INSERT INTO order_details (order_id, flower_id, quantity) VALUES (1, 1, 10), (2, 2, 5);

SELECT *FROM order_details