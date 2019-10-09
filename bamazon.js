var mysql = require("mysql");
var cTable = require('console.table');
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'rootroot',
    database : 'bamazon'
  });
   
  connection.connect(function(err) {
    if (err) throw err;
    // console.log("working!")
  });

  console.table([
    {
      id: 1,
      product: 'basketballs',
      department: "sporting goods",
      price: 10.00,
      stock: 100,
    }, 
    {
      id:2,
      product: 'grills',
      department: "home goods",
      price: 75.00,
      stock: 50,
    },
    {
      id: 3,
      product: 'lipstick',
      department: "cosmetics",
      price: 8.00,
      stock: 30,
    }, 
    {
      id:4,
      product: 'lily',
      department: "garden",
      price: 10.00,
      stock: 50,
    },
    {
      id: 5,
      product: 'cowboy hat',
      department: "mensware",
      price: 25.00,
      stock: 20,
    }, 
    {
      id:6,
      product: 'laptop',
      department: "electronics",
      price: 500.00,
      stock: 12,
    },
    {
      id: 7,
      product: 'notebook',
      department: "back to school",
      price: 2.00,
      stock: 200,
    }, 
    {
      id:8,
      product: 'rolex',
      department: "jewelry",
      price: 1500.00,
      stock: 3,
    },

  ]);

  
inquirer
  .prompt([
    {
    type: "confirm",
    name: "id",
    message: "Enter the ID number of the product you'd like to buy"
  },
  {
    type: "confirm",
    name: "amount",
    message: "How many units would you like to buy?"
  }

  ])
  .then(answers => {
    
  });