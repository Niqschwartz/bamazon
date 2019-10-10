var mysql = require("mysql");
var cTable = require('console.table');

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'rootroot',
  database: 'bamazon'
});

connection.connect(function (err) {
  if (err) throw err;
 display()
});
function display(){
connection.query("select * from products", function (err, res) {
  // console.log(res); 
  console.table(res);
  userInput()
})
}
var inquirer = require('inquirer');
function userInput()

{
inquirer
  .prompt([
    {
      type: "input",
      name: "id",
      message: "Enter the ID number of the product you'd like to buy"
    },
    {
      type: "input",
      name: "amount",
      message: "How many units would you like to buy?"
    }

  ])
  .then(answers => {
    console.log(answers)
    
    total(answers.id, answers.amount)
  });
}

function total(id, amount){
// console.log(id+amount);
connection.query("select * from products where item_id="+id, function(err, res){
  console.log(res[0].stock_quantity)

if (amount < res[0].stock_quantity) {

  // connection.query("SELECT * FROM products WHERE item_id=" + id)


  
  connection.query(
    "UPDATE products SET ? WHERE ?",
    [
      {
        stock_quantity: res[0].stock_quantity - amount
      },
      {
        item_id: id
      }
    ],
    function(error) {
      if (error) throw err;
      console.log("Your order has been placed!");
      display();
    }
  );
}
else {
  console.log("We don't have enough of that item in stock...");
  display();
}
})

}