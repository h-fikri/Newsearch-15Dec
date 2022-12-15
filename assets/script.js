var API_KEY = "dbebac7ab571f201896c367188286a87";
// Form inputs go here - hardcoding the search parameters - we can change them depending on the form inputs
var search = "cat";
var country = "us";
var language = "en";
// query URL with parameters from above
var queryURL =
  "https://gnews.io/api/v4/search?q=" +
  search +
  "&token=" +
  API_KEY +
  "&lang=" +
  language +
  "&country=" +
  country +
  "&max=10";

//making AJAX request and storing some parts of response in variables
$.ajax({
  url: queryURL,
  method: "GET",
}).then(function (response) {
  // console.log(response);
  var results = response.articles;
  // console.log(results);

  for (var i = 0; i < results.length; i++) {
    var title = results[i].title;
    var content = results[i].content;
    var image = results[i].image;
    console.log(`Title: ${title} , Content: ${content}, Image: ${image}`);
  }
});
