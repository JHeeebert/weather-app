//Universal Variables
var searchHistory = []
var city = ""
var apiUrl = 'https://fcc-weather-api.glitch.me/api/current?lon=-80.7108608' + '&lat=35.2387072';
//Call to OpenWeather API
fetch(apiUrl)
  .then(response => {
    if (response.ok) {
      return response.json();
    }
  })
  .then(data => {
    //Current City Weather Data based off Lat/Lon coordinates from openWeather API 
    //that we can use for generating information
    //Current Weather Forecast
    var currDate = document.getElementsByClassName('current-date')[0];
    var currIcon = document.getElementsByClassName('current-icon')[0];
    var currTemp = document.getElementsByClassName('current-temp')[0];
    var currWind = document.getElementsByClassName('current-wind')[0];
    var currHumid = document.getElementsByClassName('current-humid')[0];
    console.log(data);
  })
//City Search Bar
const submitForm = function (event) {
  //stop page from default reload action
  event.preventDefault()
  var searchName = (".searchName").val().trim()
  if (searchName) {
    cityWeather(searchName)
      (".searchName").val("")
  } else {
    alert("You Must Enter A City Name")
  }
}
var fiverUrl = 'https://api.openweathermap.org/data/2.5/forecast?q=New%20York&appid=10dd70968c138de58593c18c06b36159&cnt=5';
fetch(fiverUrl)
  .then(response => {
    if (response.ok) {
      return response.json();
    }
  })
  .then(fiverData => {
    //Five Day Forecast Data from API That we can use for generating information
    //Five Day Forecast
    var fiverDate = document.getElementsByClassName('fiver-date')[0];
    var fiverIcon = document.getElementsByClassName('fiver-icon')[0];
    var fiverTemp = document.getElementsByClassName('fiver-temp')[0];
    var fiverWind = document.getElementsByClassName('fiver-wind')[0];
    var fiverHumid = document.getElementsByClassName('fiver-humid')[0];
    console.log(fiverData);
  })


