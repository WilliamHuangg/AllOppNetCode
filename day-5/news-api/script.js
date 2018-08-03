// Code out an event listener for the button that logs "Button pressed!" to the console when it is clicked
var button = document.querySelector("#mainButton");
var input = document.querySelector("#input");
var wrapper = document.querySelector('#wrapper')

button.addEventListener("click", e => {
  console.log("Button is clicked!")
  var inputValue = input.value
  sendApiRequest(inputValue)
})

// Go to https://developers.giphy.com/ and create an account. Then create your first app called testApp to create an API key. Enter it below.
function sendApiRequest(value) {
    fetch("https://newsapi.org/v2/top-headlines?country=us&category="+value+"&apiKey=63be4c36482045bbbee4fe82d621d164")
    .then(function(data) {
      return data.json();
    })
    .then(function(json) {
      console.log(json);
        addArticlesToPage(json)
      // Pass the JSON on to the next function.
    })
}

function addArticlesToPage(json){
    var allDaArticles = json.articles 
    
    allDaArticles.forEach( article => {
        wrapper.innerHTML += '<h1>'+article.title+'</h1>'
        wrapper.innerHTML += '<a href="'+article.url+'">Link To Article</a>'
        
        wrapper.innerHTML += '<p>'+article.description+'</p>'
        wrapper.innerHTML += `<img src="${article.urlToImage}"/>`
    })
}

