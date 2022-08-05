document.querySelector('.index3').addEventListener('click', () => alert('hidden item still triggers events'));

//load calendar daily page events view
 $(document).ready(function(){
     $("button").click(function(){
      $("#create").load("   ");
  });
 });

// //   //when already in event view, load calendar weekly page fun facts view
 $(document).ready(function(){
     $("button").click(function(){
      $("#funFactsView").load("   ");
   });

 //When in event view  
//add event input to Monday's corresponding list element (or corresponding time block child of a day parent)
   function addEvent() {
    var x = document.getElementById("mondayEventsLog");
     var option = document.createElement("eventBlock");
     option.text = "   ";
    x.add(option);
   }

//moment.js to get current time
// //moment('01/01/2016', 'MM/DD/YYYY', true).format();
 var dayDisplay=moment().format("dddd, MMMM Do, YYYY");
  $("#today").text(dayDisplay);




 //save api's current output to today's calendar funFact View
    function addEvent() {
   var x = document.getElementById("mondayFunFactsLog");
    var option = document.createElement("eventBlock");
    option.text = "   ";
    x.add(option);
  }

//hide all elements specific to events view, and show all specific to funFacts(and vice-versa),
//when toggling from one of the Weekly Views to the other
$(document).ready(function(){
    $("#eventsView").click(function(){
      $("  an events div ").hide();
    });
    $("#funFactsView").click(function(){
      $(" a funFacts div").show();
    });
  });

    //reverse, for the "to Events Views" button, hide all funFact cal view and show Event cal view
    $(document).ready(function(){
        $("#eventsView").click(function(){
          $("  an events div ").hide();
        });
        $("#funFactsView").click(function(){
          $(" a funFacts div").show();
        });
      });
  

      //move the bellow code to js when available
      $(function(){
        $("#calendar").load("calIndex.html"); 
      });
      







var api = document.getElementById('api');
var fetchButton = document.getElementById('displayContent');


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
getJokes();
fetchButton.addEventListener('click', getJokes)





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
 });