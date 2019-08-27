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
        .then(function (answer) {
            switch (answer.action) {
                case "Find Product by ID":
                    productSearch();
                    break;
            }
        })
};

function productSearch() {
    inquirer
        .prompt({
            name: "product",
            type: "input",
            message: "What product would you like to look for?"
        })
        .then(function (answer) {
            console.log(answer.product);
            connection.query("SELECT * FROM bamazon_db WHERE ?", { product: answer.product }, function (err, res) {
                if (err) throw err;
                console.log(
                    "item_id " +
                    res[0].item_id +
                    " || product_name: " +
                    res[0].product_name +
                    " ||  price: " +
                    res[0].price +
                    " || stock_quantity: " +
                    res[0].stock_quantity
                );
                runSearch();
            });
        });
}