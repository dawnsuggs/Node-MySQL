var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "",
  database: "bamazonDB"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId + "\n");
  readProducts();
});

function readProducts() {
  connection.query("SELECT item_id, product_name, department_name, price, stock_quantity FROM products", function(err, res) {
    if (err) throw err;
// start();
    // Log all results of the SELECT statement
    console.log(res);
    // connection.end();
  });
}

// // // function which prompts the user for what action they should take
// function start() {
//     inquirer
//       .prompt([
//         {
//           names: "choice",
//           type: "rawlist",
//           choices: function() {
//             var choiceArray = [];
//             for (var i = 0; i < results.length; i++) {
//               choiceArray.push(results[i].item_id);
//             }
//             return choiceArray;
//           },
//           message: "What is the ID of the product you'd like to order?"
//         },
//         {
//           name: "order",
//           type: "input",
//           message: "How many units would you like to buy?"
//         }
//       ])
//       .then(function(answer) {
//         // get the information of the chosen item
//         var chosenItem;
//         for (var i = 0; i < results.length; i++) {
//           if (results[i].item_id === answer.choice) {
//             chosenItem = results[i];
//           }
//         }

// // //         // determine if there's enough in stock
//         if (chosenItem.stock_quantity > parseInt(answer.choice) {
//           // bid was high enough, so update db, let the user know, and start over
//           connection.query(
//             "UPDATE bamazonDB SET ? WHERE ?",
//             [
//               {
//                 stock_quantity: answer.choice
//               },
//               {
//                 id: chosenItem.id
//               }
//             ],
//             function(error) {
//               if (error) throw err;
//               console.log("Item ordered successfully!");
//               start();
//             }
//           );
        
//         else {
//           //  not enough, so apologize and start over
//           console.log("We don't have enough in stock. Please try again...");
//           start();
//         }
//       });
//   });
// }}

