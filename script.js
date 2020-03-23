console.log("i am here!")

var jokeCategories = ["animal", "career", "celebrity", "dev", "fashion", "food", "history", "money", "movie", "music", "political", "religion", "science", "sport", "travel"];
var randomJokeCategory = Math.floor(Math.random() * jokeCategories.length);
var queryURL = `https://api.chucknorris.io/jokes/random?category=${jokeCategories[randomJokeCategory]}`
$.ajax({
    url: queryURL,
    method: "GET"
}).then(function (response) {
    console.log(response);
    $("body").prepend(response.value)
});