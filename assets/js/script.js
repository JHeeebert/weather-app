// array to hold search history
var searchHistory = []
var city = ""

//Open weather API Call
var cityWeather = function (city) {
  // Sett url parameters
  var apiUrl = "https://api.openweathermap.org/data/2.5/forecast?city&units=imperial&lat=35.2387072&lon=-80.7108608&appid=10dd70968c138de58593c18c06b36159"
  fetch(apiUrl)
    .then(function (response) {
      if (response.ok) {
        response.json().then(function (data) {
          cityWeather(data)
        })
      } else {
        alert(Error, "+ resp.statusText")
      }
    })
    .catch(function (error) {
      alert("Cannot Reach OpenWeather")
    })
    
}
console.log(cityWeather)
//function for form submit
var submitForm = function (event) {
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

var weatherDisplay = function (weatherInfo) {
  var celcius = Math.round(parseFloat(data.main.temp) - 273.15);
  var fahrenheit = Math.round(((parseFloat(data.main.temp) - 273.15) * 1.8) + 32);
  var description = data.weather[0].description;

  document.getElementById('current-icon').innerHTML = description;
  document.getElementById('current-city').innerHTML = data.name;
  document.getElementById('current-Temp').innerHTML = fahrenheit + '&deg;';
  weatherDisplay(data)
  //Five Day Forecast
  fetch("https://api.openweathermap.org/data/2.5/forecast?q=" + weatherInfo.name + "&appid=10dd70968c138de58593c18c06b36159")
    .then(function (response) {
      response.json().then(function (data) {
        (".fiver").empty()
        for (i = 7; i <= data.list.length; i += 8) {
          let fiver = `
      
      `;
          $("#fiver").append(fiverCard);
        }
      })
    })
  lastCitySearched = weatherInfo.name;
  saveSearchHistory(weatherInfo.name);
}


