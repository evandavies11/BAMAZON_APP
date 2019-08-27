var mysql = require("mysql");
var inquirer = require("inquirer");

// create the connection information for the sql database
var connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "1Foldingcrane",
    database: "bamazon_db"
});

// connect to the mysql server and sql database
connection.connect(function (err) {
    if (err) throw err;
    // run the start function after the connection is made to prompt the user
    searchItems();
});

function searchItems() {

    //var productTable = " Choose Products";
    //connection.query(productTable, function (err, productTableinfo) {
    //  if (err) throw err;

    //console.log(productTableinfo)
    //});

    inquirer
        .prompt({
            name: "action",
            type: "list",
            message: "What would your like to buy? ",
            choices: [
                "what is the Product ID of the item you wish to purchase?",
                "How many would you like to buy?"
            ]
        })


};