DROP DATABASE IF EXISTS bamazon_db;

CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE products
(
    item_id INT NOT NULL
    AUTO_INCREMENT,
    product_name VARCHAR
    (100),
    department_name VARCHAR
    (100),
    price FLOAT
    (10,2),
    stock_quantity INT
    (5) DEFAULT 0, 
    UNIQUE
    (product_name),
    PRIMARY KEY
    (item_id)
);
    ALTER TABLE products AUTO_INCREMENT = 1000;

    USE bamazon_db;

    INSERT INTO products
        (product_name, department_name, price, stock_quantity)
    VALUES
        ("Cashews", "food", 4.15, 10),
        ("6 pack PBR", "beverages", 5.99, 20),
        ("Coffee", "food", 6.15, 10),
        ("iphone", "electronics", 646.99, 5),
        ("usb cable", "electronics", 12.49, 30),
        ("GameBoy", "electronics", 200.00, 20);

    SELECT
    FROM * products;

    ALTER TABLE products AND product_sales FLOAT
    (10,2);
    ALTER TABLE products ALTER product_sales
    SET
    DEFAULT 0.00

    CREATE TABLE departments
    (
        department_id INT(20)
        AUTO_INCREMENT NOT NULL,
        department_name VARCHAR
        (50),
        overhead_costs INT
        (10),
        UNIQUE
        (department_name),
        PRIMARY KEY
        (department_id)
    );

        ALTER TABLE departments AUTO_INCREMENT = 100;

