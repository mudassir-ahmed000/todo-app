// function addTodo() {
//     var input = document.getElementById("todoInput");
//     var text = input.value;
//     if (text.trim() === "") {
//         alert("Please enter a valid todo.");
//         return;
//     }
//     var ul = document.getElementById("todoList");
//     var li = document.createElement("li");
//     var span = document.createElement("span");
//     span.textContent = text;
    
//     var editBtn = document.createElement("button");
//     editBtn.textContent = "Edit";
//     editBtn.onclick = function() {
//         var newText = prompt("Edit todo:", text);
//         if (newText !== null) {
//             span.textContent = newText;
//         }
//     };
    
//     var deleteBtn = document.createElement("button");
//     deleteBtn.textContent = "Delete";
//     deleteBtn.onclick = function() {
//         ul.removeChild(li);
//     };
    
    
//     li.appendChild(span);
//     li.appendChild(editBtn);
//     li.appendChild(deleteBtn);
//     ul.appendChild(li);
    
//     input.value = "";
// }

// function deleteAll() {
//     var ul = document.getElementById("todoList");
//     ul.innerHTML = "";
// }









// Sql database/Relational database structure quree language
// NoSql database/No-relationalDatabase 

// const { default: firebase } = require("firebase/compat/app");

//  these  2 types of data base work same
// data will save in table in database
// go on fire base built then database then create then test mode then create data  studet key for data base write db == firebase.database()
// then console.log(db):go to firebase dashbord then settings then copy key of database url and paste in fire base key in vs code in js then create 3 rd link called database

// set method save data without id creat uniqe id only in set method 
// ref method save data with id





// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//     apiKey: "AIzaSyCDAaN_pWBvGp9hcCVZl-kdb_wyEl5OtaA",
//     authDomain: "js-calculator-486c1.firebaseapp.com",
//     databaseURL: "https://js-calculator-486c1-default-rtdb.firebaseio.com",
//     projectId: "js-calculator-486c1",
//     storageBucket: "js-calculator-486c1.appspot.com",
//     messagingSenderId: "722695056202",
//     appId: "1:722695056202:web:a21b9f84dc53b40d3cefb3",
//     measurementId: "G-4BMS4EE7G7"
//   };
  
  // Initialize Firebase
  // var app = firebase.initializeApp(firebaseConfig);
  // firebase
  //   .database()
  //   .ref("todos")
  //   .on("child_added", function (data) {


      // var liElement = document.createElement("li");
  
      // var liText = document.createTextNode(data.val().value);
  
      // liElement.appendChild(liText);
  
      // var delbtn = document.createElement("button");
  
      // var delbtnText = document.createTextNode("Delete");
  
      // delbtn.appendChild(delbtnText);
  
      // delbtn.setAttribute("onclick", "deleteItem(this)");
  
      // liElement.appendChild(delbtn);
  
      // var editbtn = document.createElement("button");
  
      // var editbtnText = document.createTextNode("Edit");
  
      // editbtn.appendChild(editbtnText);
  
      // liElement.appendChild(editbtn);
  
      // editbtn.setAttribute("onclick", "editItem(this)");
  
      // var list = document.getElementById("list");
  
      // list.appendChild(liElement);
  
      // console.log(liElement);
  //   });
  
  // function addtodo() {
  //   var input = document.getElementById("inputField");
  //   var key = Date.now().toString(26);
  
  //   var todos = {
  //     value: input.value,
  //     key,
  //   };
  //   firebase
  //     .database()
  //     .ref("todos/" + key)
  //     .set(todos);
  //   input.value = "";
  // }
  
  // function deleteAll() {
  //   firebase.database().ref("todos").remove();
  //   var list = document.getElementById("list");
  //   list.innerHTML = "";
  // }
  
  // function deleteItem(x) {
  //   console.log(x.parentNode.remove());
  // }
  
  // function editItem(e) {
  //   var input = prompt("Enter updated value...");
  
  //   e.parentNode.firstChild.nodeValue = input;
  // }











  // Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCDAaN_pWBvGp9hcCVZl-kdb_wyEl5OtaA",
    authDomain: "js-calculator-486c1.firebaseapp.com",
    databaseURL: "https://js-calculator-486c1-default-rtdb.firebaseio.com",
    projectId: "js-calculator-486c1",
    storageBucket: "js-calculator-486c1.appspot.com",
    messagingSenderId: "722695056202",
    appId: "1:722695056202:web:a21b9f84dc53b40d3cefb3",
    measurementId: "G-4BMS4EE7G7"
  };

// Initialize Firebase
var app = firebase.initializeApp(firebaseConfig);
firebase
  .database()
  .ref("todos")
  .on("child_added", function (data) {
    var liElement = document.createElement("li");

    var liText = document.createTextNode(data.val().value);

    // console.log(data.val().value)

    liElement.appendChild(liText);

    var delbtn = document.createElement("button");

    var delbtnText = document.createTextNode("Delete");

    delbtn.appendChild(delbtnText);

    delbtn.setAttribute("onclick", "deleteItem(this)");
    delbtn.setAttribute("id", data.val().key);

    liElement.appendChild(delbtn);

    var editbtn = document.createElement("button");

    var editbtnText = document.createTextNode("Edit");

    editbtn.appendChild(editbtnText);

    liElement.appendChild(editbtn);

    editbtn.setAttribute("onclick", "editItem(this)");
    editbtn.setAttribute("id", data.val().key);

    var list = document.getElementById("list");

    list.appendChild(liElement);
  });

function addtodo() {
  var input = document.getElementById("inputField");
  var key = Date.now().toString(26);

  var todos = {
    value: input.value,
    key,
  };
  firebase
    .database()
    .ref("todos/" + key)
    .set(todos);
  input.value = "";
}

function deleteAll() {
  firebase.database().ref("todos").remove();
  list.innerHTML = "";
}

function deleteItem(e) {
  firebase.database().ref(`todos/${e.id}`).remove();
  e.parentNode.remove();
}

function editItem(e) {
  var input = prompt(
    "Enter updated value...",
    (e.parentNode.firstChild.nodeValue = input)
  );
  firebase.database().ref(`todos/${e.id}`).set({
    key: e.id,
    value: input,
  });

  e.parentNode.firstChild.nodeValue = input;
}