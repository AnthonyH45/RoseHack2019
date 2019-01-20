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

// // import React from 'react'
// // import ReactDOM from 'react-dom'
// // import './index.css';
//
// function getMenuItem() {
//   var response;
//   var menuEntry = prompt("Enter menu item: ", "Mushroom Flatbread");
//
//   if(menuEntry === null || menuEntry === ""){
//     response = "menuEntry was null or void";
//   } else {
//     response = "Did you order the " + menuEntry + "?";
//   }
//     document.getElementById("menu_item").innerHTML = response;
// }
//
// // //
// // // function getMenuItem() {
// // //   var response;
// // //   var menuEntry = prompt("Enter menu item: ", "Mushroom Flatbread");
// // //
// // //   if(menuEntry === null || menuEntry === ""){
// // //     response = "menuEntry was null or void";
// // //   } else {
// // //     response = "Did you order the " + menuEntry + "?";
// // //   }
// // //   document.getElementById("menu_item").innerHTML = response;
// // // }
// // //
// // // function Square(props){
// // // 	return(
// // // 		<button className="square" onClick={props.onClick}>
// // // 		{props.value}
// // // 		</button>
// // // 	);
// // // }
// // //
// // // function calculateWinnter(squares) {
// // // 	const lines = [
// // // 		[0, 1, 2],
// // // 		[3, 4, 5],
// // // 		[6, 7, 8],
// // // 		[0, 3, 6],
// // // 		[1, 4, 7],
// // // 		[2, 5, 8],
// // // 		[0, 4, 8],
// // // 		[2, 4, 6],
// // // 	];
// // // 	for(let i = 0; i < lines.length; i++){
// // // 		const [a, b, c] = lines[i];
// // // 		if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
// // // 			return squares[a];
// // // 		}
// // // 	}
// // // 	return null;
// // // }
// // //
// // // class Board extends React.Component {
// // //   constructor(props){
// // // 	  super(props);
// // // 	  this.state = {squares: Array(9).fill(null), xIsNext: true,};
// // //   }
// // //
// // //   handleClick(i) {
// // // 	  const squares = this.state.squares.slice();
// // //
// // // 		if(calculateWinnter(squares) || squares[i]){
// // // 			return;
// // // 		}
// // //
// // // 	  squares[i] = this.state.xIsNext ? 'X' : 'O';;
// // // 	  this.setState({squares: squares, xIsNext: !this.state.xIsNext,});
// // //   }
// // //
// // //   renderSquare(i) {
// // //     return (<Square value={this.state.squares[i]} onClick={() => this.handleClick(i)} />);
// // //   }
// // //
// // //   render() {
// // //     //const status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
// // // 		const winner = calculateWinnter(this.state.squares);
// // // 		let status;
// // // 		if(winner) {
// // // 			status = 'Winner: ' + winner;
// // // 		} else {
// // // 			status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
// // // 		}
// // //
// // //
// // //     return (
// // //       <div>
// // //         <div className="status">{status}</div>
// // //         <div className="board-row">
// // //           {this.renderSquare(0)}
// // //           {this.renderSquare(1)}
// // //           {this.renderSquare(2)}
// // //         </div>
// // //         <div className="board-row">
// // //           {this.renderSquare(3)}
// // //           {this.renderSquare(4)}
// // //           {this.renderSquare(5)}
// // //         </div>
// // //         <div className="board-row">
// // //           {this.renderSquare(6)}
// // //           {this.renderSquare(7)}
// // //           {this.renderSquare(8)}
// // //         </div>
// // //       </div>
// // //     );
// // //   }
// // // }
// // //
// // // class Game extends React.Component {
// // //     render() {
// // //     return (
// // //       <div className="game">
// // //         <div className="game-board">
// // //           <Board />
// // //         </div>
// // //         <div className="game-info">
// // //           <div>{/* status */}</div>
// // //           <ol>{/* TODO */}</ol>
// // //         </div>
// // //       </div>
// // //     );
// // //   }
// // // }
// //
// // // ========================================
// //
// //
// // //ReactDOM.render(<App />, document.getElementById('root'));
// // //
// // // ReactDOM.render(
// // //   // <Game />,
// // //   document.getElementById('root')
// // // );
