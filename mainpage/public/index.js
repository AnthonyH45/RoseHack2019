var response = "";
var menu_item = "";
var custName = "";
var done = "false";
var qty = "";
var comments = "";
var phone_number = "";

function getMenuItem() {
  menu_item = prompt("Enter menu item: ", "Mushroom Flatbread");
  if(menu_item === null || menu_item === ""){
    response = "menuEntry was null or void";
  } else {
    response = "You ordered the " + menu_item + "!";
  }
    document.getElementById("menu_item").innerHTML = response;
}

function getCustomerName() {
  custName = prompt("Enter your name: ", "Joe Smith");

  if(custName === null || custName === ""){
    response = "name was null or void";
  } else {
    response = "Hello " + custName + ", thank you for choosing to eat at Bytes!";
  }
    document.getElementById("custName").innerHTML = response;
}

function getQty() {
  qty = prompt("Enter the amount: ", "1");

  if(qty === null || qty === ""){
    response = "The amount was null or void";
  } else {
    response = "You want " + qty + " x " + menu_item;
  }
    document.getElementById("qty").innerHTML = response;
}

function getComments() {
  comments = prompt("Any special instructions: ", "no cheese?");

  if(qty === null || custName === ""){
    response = "The amount was null or void";
  } else {
    response = "You said " + comments;
  }
    document.getElementById("comments").innerHTML = response;
}

function getPhoneNumber(){
  phone_number = prompt("Enter phone number to recieve a text when your order is ready");

  if(phone_number === null || phone_number === ""){
    response = "The phone number was null or void, how will you know when the food is ready?";
  } else {
    response = "Text message will be sent to " + phone_number;
  }
    document.getElementById("phoneNumber").innerHTML = response;
}

function sendOrder(){
  // var temp = prompt("Sent!");
  const MongoClient = require('mongodb').MongoClient;

  const uri = "mongodb+srv://test:test123@cluster0-mkrb4.mongodb.net/test?retryWrites=true";
  const client = new MongoClient(uri, { useNewUrlParser: true });
  client.connect(err => {
    const collection = client.db("bytesOrders").collection("orders").insert([{"menu_item":menu_item,"customer_name":custName,"done":done,"qty":qty,"comments":comments,"phone_number":phone_number}]);
    client.db("bytesOrders").collection("orders").insert([{"menu_item":menu_item,"customer_name":custName,"done":done,"qty":qty,"comments":comments,"phone_number":phone_number}]);
    client.close();
  });
  var temp = prompt("Sent!");
}
