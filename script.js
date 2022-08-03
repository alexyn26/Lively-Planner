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
}
getFunFact();
fetchButton.addEventListener('click', getFunFact);