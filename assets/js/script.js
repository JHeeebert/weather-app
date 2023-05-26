//Universal Variables
var searchHistory = ('#search-history-list');
var searchCityInput = ("#search-city");
var searchCityButton= ("#search-city-button");
var clearHistoryButton = ("#clear-history");
var apiUrl = 'https://api.openweathermap.org/data/2.5/forecast?lon=-80.7108608' + '&lat=35.2387072&appid=10dd70968c138de58593c18c06b36159';
//Call to OpenWeather API
fetch(apiUrl)
  .then(response => {
    if (response.ok) {
      return response.json();
    }
  })
  .then(data => {
    //Pulls Current City Weather Data based off Lat/Lon coordinates from openWeather API 
    console.log(data);
//------------------------------//
//--------Current-Forecast-------//
//------------------------------//
    var currDate = document.getElementsByClassName('current-date')[0];
    var currIcon = document.getElementsByClassName('current-icon')[0];
    var currTemp = document.getElementsByClassName('current-temp')[0];
    var currWind = document.getElementsByClassName('current-wind')[0];
    var currHumid = document.getElementsByClassName('current-humid')[0];
   //function writeCurrent CREATE FUNcTION TO WRITE CURRENT_FORECAST TO CURRENT_CONTENT

  })
var fiverUrl = 'https://api.openweathermap.org/data/2.5/forecast?q=Charlotte&appid=10dd70968c138de58593c18c06b36159&cnt=5';
fetch(fiverUrl)
  .then(response => {
    if (response.ok) {
      return response.json();
    }
  })
  .then(fiverData => {
    //Pulls Five-Day-Forecast Data for Charlotte NC from OpenWeather API
    console.log(fiverData);
//------------------------------//
//--------5-Day-Forecast-------//
//------------------------------//
    var fiverDate = document.getElementsByClassName('fiver-date')[0];
    var fiverIcon = document.getElementsByClassName('fiver-icon')[0];
    var fiverTemp = document.getElementsByClassName('fiver-temp')[0];
    var fiverWind = document.getElementsByClassName('fiver-wind')[0];
    var fiverHumid = document.getElementsByClassName('fiver-humid')[0];
  //function writeFiver CREATE FUNcTION TO WRITE FIVE_DAY_FORECAST TO FIVER_CONTENT
  })


