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

function showIndex3(){
  var weeklyPlanner = document.getElementById("index3");
  document.getElementById("index3").style.display = "block";
  weeklyPlanner.scrollIntoView();
  document.getElementById("index2").style.display = "none";
}
function saveConfirm(){
  confirmText = document.getElementById("saveConfirmation");
  confirmText.textContent = "Your content has been saved.";
}
function backtoDaily(){
  var dailyView = document.getElementById("index2");
  document.getElementById("index2").style.display = "block";
  dailyView.scrollIntoView();
  document.getElementById("index3").style.display = "none";
}






// //fetches api jokes

var api = document.getElementById('api');
 var fetchButton = document.getElementById('readytoPlan');


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
    getJokes();
    fetchButton.addEventListener('click', getJokes)
}






//fetches api facts
function getFunFact() {
  var requestUrl = 'https://asli-fun-fact-api.herokuapp.com/';
    console.log(requestUrl)
  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
    {
      console.log(data);
        api.textContent = data.data.fact;
        return;
      }
    });
    getFunFact();
fetchButton.addEventListener('click', getFunFact);
}






//mini calendar functionality
const date = new Date();
date.setDate(1);
var firstDayIndex= date.getDay();
const monthDays=document.querySelector(".days");
const lastDate= new Date(date.getFullYear(), date.getMonth()+1,0).getDate();
const prevLastDay = new Date(date.getFullYear(), date.getMonth(),0).getDate();

var months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "November",
  "December"
];
document.querySelector(".monthName").innerHTML = months[date.getMonth()];



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
      
