CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE products
(
    item_id INT NOT NULL
    AUTO_INCREMENT,
    product_name VARCHAR
    (20) NOT NULL,
    department_name VARCHAR
    (20) NOT NULL,
    price INT
    (4) NOT NULL,
    stock_quantity INT
    (5) DEFAULT 0, 
    PRIMARY KEY
    (id)
)