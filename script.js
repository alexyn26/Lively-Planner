//moment.js to get current time
// //moment('01/01/2016', 'MM/DD/YYYY', true).format();
var dayDisplay=moment().format("dddd, MMMM Do, YYYY");
$("#today").text(dayDisplay);


function showIndex2(){
var dailyPage = document.getElementById("index2");
document.getElementById('index2').style.display = "block";
dailyPage.scrollIntoView();
document.getElementById("index1").style.display = "none"
}




// api variables
var api = document.getElementById('api');
var getApi = document.getElementById('readytoPlan');
var select = document.querySelector("#category");



// Starts the event listener to retrive api
getApi.addEventListener("click", function(event){
    event.preventDefault();
    if (select.value === ""){
      return;
    }
  else if ( select.value === "joke" ) {
   return getJokes();
  } else if ( select.value === "fun-fact") {
  return getFunFact();
  } else if( select.value === "random"){
   return pickForMe();
  }
});
// function to get the jokes from the api
function getJokes() {
  var requestUrl = 'https://geek-jokes.sameerkumar.website/api?format=jsonon';

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      {
        api.textContent = data;
        return;
      }
    });
}
// function to get the facts from api
function getFunFact() {
  var requestUrl = 'https://asli-fun-fact-api.herokuapp.com/';

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
   
    {
        api.textContent = data.data.fact;
        return;
      }
    });
  }
// function to pick a random api
  function pickForMe(){
    var apiArray = 
    [1, 2];
    var random = Math.floor(Math.random() * apiArray.length);
    if (random == 0){
    getFunFact();
fetchButton.addEventListener('click', getFunFact);
}
 

 var todoInput = document.querySelector("#toDoInput");
 var todoForm = document.querySelector("#toDo");
 var todoList = document.querySelector("#todoList");
 var todoCountSpan = document.querySelector("#todo-count");
 var submit = document.querySelector("submitItem");
 
 var todos = [];

 function renderTodos() {
  todoList.innerHTML = "";
  todoCountSpan.textContent = todos.length;
  for (var i = 0; i < todos.length; i++) {
    var todo = todos[i];

    var li = document.createElement("li");
    li.textContent = todo;
    li.setAttribute("data-index", i);


    
    var check = document.createElement("INPUT");
    check.setAttribute("type", "checkbox")
    

    li.appendChild(check);
    todoList.appendChild(li);
    
  }
}

function init() {
  
  var storedTodos = JSON.parse(localStorage.getItem("todos"));
  if (storedTodos !== null) {
    todos = storedTodos;
  }
 
  renderTodos();
}

function storeTodos() {
  localStorage.setItem("todos", JSON.stringify(todos));
}

todoForm.addEventListener("click", function(event) {
  event.preventDefault();
  var todoText = todoInput.value.trim();
 
  if (todoText === "") {
    return;
  }

  todos.push(todoText);
  todoInput.value = "";
 

  storeTodos();
  renderTodos();
});


todoList.addEventListener("click", function(event) {
  var element = event.target;
  
  if (element.matches("checkbox") === true) {
    var index = element.parentElement.getAttribute("data-index");
    todos.splice(index, 1);
    
    storeTodos();
    renderTodos();
  }
});

init();


function showIndex2(){
  var dailyPage = document.getElementById("index2");
  document.getElementById('index2').style.display = "block";
  dailyPage.scrollIntoView();
  document.getElementById("index1").style.display = "none";
  getFunFact();
}



  //   } else if (random == 1){
  //   getJokes();
  //   }
    // }
  



//mini calendar functionality
// const date = new Date();
// date.setDate(1);
// var firstDayIndex= date.getDay();
// const monthDays=document.querySelector(".days");
// const lastDate= new Date(date.getFullYear(), date.getMonth()+1,0).getDate();
// const prevLastDay = new Date(date.getFullYear(), date.getMonth(),0).getDate();

// var months = [
// "January",
// "February",
// "March",
// "April",
// "May",
// "June",
// "July",
// "August",
// "September",
// "November",
// "December"
// ];
// document.querySelector(".monthName").innerHTML = months[date.getMonth()];



//load calendar daily page events view
//  //$(document).ready(function(){
//      $("#readytoPlan").click(function(){
//       $(document).load("#i");
//   });
//  //});



// var hiddenIndex2 = $("#container1" );
// $( "#readytoPlan" ).on( "click", function( event ) {
//   hiddenIndex2.show();

// });

// // //   //when already in event view, load calendar weekly page fun facts view
//  $(document).ready(function(){
//      $("button").click(function(){
//       $("#create").load("#index3");
//    });

//  //When in event view  
// //add event input to Monday's corresponding list element (or corresponding time block child of a day parent)
//    function addEvent() {
//     var x = document.getElementById("monday");
//      var option = document.createElement("eventBlock");
//      option.text = "   ";
//     x.add(option);
//    }

//  //save api's current output to today's calendar funFact View
//     function addEvent() {
//    var x = document.getElementById("monday");
//     var option = document.createElement("eventBlock");
//     option.text = "   ";
//     x.add(option);
//   }

// //hide all elements specific to events view, and show all specific to funFacts(and vice-versa),
// //when toggling from one of the Weekly Views to the other
// $(document).ready(function(){
//     $("#eventsView").click(function(){
//       $("  an events div ").hide();
//     });
//     $("#funFactsView").click(function(){
//       $(" a funFacts div").show();
//     });
//   });

//     //reverse, for the "to Events Views" button, hide all funFact cal view and show Event cal view
//     $(document).ready(function(){
//         $("#eventsView").click(function(){
//           $("  an events div ").hide();
//         });
//         $("#funFactsView").click(function(){
//           $(" a funFacts div").show();
//         });
//       });


//       //move the bellow code to js when available
//       //$(function(){
//       //  $("#calendar").load("calIndex.html"); 
//       //});




var srcInput = document.querySelector("#srcInput");
 var srcForm = document.querySelector("#source");
 var srcList = document.querySelector("#srcList");
 var srcCountSpan = document.querySelector("#src-count");
 var submitsrc = document.querySelector("submitSrc");
 
 var sources = [];


  
 function renderSrcs() {
  srcList.innerHTML = "";
  srcCountSpan.textContent = sources.length;
  for (var i = 0; i < sources.length; i++) {
    var source = sources[i];

    var li = document.createElement("li");
    li.textContent = source;
    li.setAttribute("data-index", i);


  }
}

function initSrc() {
  
  var storedSrcs = JSON.parse(localStorage.getItem("sources"));
  if (storedSrcs !== null) {
    sources = storedSrcs;
  }
 
  renderSrcs();
}

function storeSrcs() {
  localStorage.setItem("sources", JSON.stringify(sources));
}

srcForm.addEventListener("click", function(event) {
  event.preventDefault();
  var srcText = srcInput.value.trim();
 
  if (srcText === "") {
    return;
  }

  sources.push(srcText);
  srcInput.value = "";
 

  storeSrcs();
  renderSrcs();
});



initSrc();










// function showIndex3(){
// var weeklyPlanner = document.getElementById("index3");
// document.getElementById("index3").style.display = "block";
// weeklyPlanner.scrollIntoView();
// document.getElementById("index2").style.display = "none";
// }
// function saveConfirm(){
// confirmText = document.getElementById("saveConfirmation");
// confirmText.textContent = "Your content has been saved.";
// }
// function backtoDaily(){
// var dailyView = document.getElementById("index2");
// document.getElementById("index2").style.display = "block";
// dailyView.scrollIntoView();
// document.getElementById("index3").style.display = "none";
// }


function changeBackground(color) {
  document.querySelector('.change-background-container').style.backgroundColor = color;
}
  }
