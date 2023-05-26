//------Universal Variables-----//
var searchHistoryArr = [];
var searchCityButton = ("#search-button");
var apiUrl = 'https://api.openweathermap.org/data/2.5/forecast?lon=-80.7108608' + '&lat=35.2387072&appid=10dd70968c138de58593c18c06b36159';
//-----Function for search bar-----//
const searchCityInput = document.querySelector('.input')
searchCityInput.addEventListener("input", (e) => {
  //-----Declare and assign the value of the event's target to a----//
  //-----Variable AKA whatever is typed in the search bar----//  
  let value = e.target.value
  //-----Check: if input exists and if input is larger than 0----//
  if (value && value.trim().length > 0) {
    //-----Redefine 'value' to exclude white space and change----//
    //-----Input to all lowercase------//    
    value = value.trim().toLowerCase()
  } else {
    //-----RETURN NOTHING-----//
    //-----Show Error Message---//
  }
})
//-------Create Search-History Function-------//
function createHistory(citySearchName) {
  var searchHistoryObject = {}
  if (searchHistoryArr.length === 0) {
    searchHistoryObject['city'] = citySearchName
    searchHistoryArr.push(searchHistoryObject)
    localStorage.setItem('search-history'), json.stringify(searchHistoryArr)
  } else {
    var scanHistory = searchHistoryArr.find(
      ({ city }) => city === citySearchName
    )
    if (searchHistoryArr.length < 5) {
      if (scanHistory === undefined) {
        searchHistoryObject['city'] = citySearchName;
        searchHistoryArr.push(searchHistoryObject);
        localStorage.setItem(
          'search-history',
          JSON.stringify(searchHistoryArr)
        );
      }

    } else {
      if (scanHistory === undefined) {
        searchHistoryArr.shift()
        searchHistoryObject['city'] = citySearchName
        searchHistoryArr.push(searchHistoryObject)
        localStorage.setItem(
          'seacrh-history',
          json.stringify(searchHistoryArr)
        )
      }
    }
    ('search-history').empty();
    historyDisplay();
  }
}
//-----Create Function to display Search History-----//
function historyDisplay() {
  var getLocalStorageHistory = localStorage.getItem('search-history')
  var localStorageHistory = json.parse(getLocalStorageHistory)

  if (getLocalStorageHistory === null) {
    createHistory()
    getLocalStorageHistory = localStorage.getItem('search-history')
    localStorageHistory = JSON.parse(getLocalStorageHistory)
  }
  for (var i = 0; i < localStorageHistory.length; i++) {
    var historyList = $('<li>');
    historyList.addClass('list-group-item');
    historyList.text(localStorageHistory[i].city);
    ('search-history').prepend(historyList);
    ('search-history-list').show();
  }
  return (searchHistoryArr = localSearchHistory);
}
//-------Function for Clear-Search-History Button------// 
const clearHistoryButton = document.getElementById('clear-history')

clearHistoryButton.addEventListener("click", () => {
  //-------- 1. write a function that removes any previous-----//
  //-------- results from the page ------//
  function clearHistory() {
    ('clear-history').on('click', function () {
      ('#search-history-list').empty();
      ('search-history-container').hide();
      localStorage.removeItem('searchHistory');
      createHistory();
    });
  }
})
//-------Create function called Search-Results that uses----// 

//-------OpenWeather API city array to create search data-----//

//-------Create Function to convert Kelvin to Farenheit-----//

//-------Call to OpenWeather API----------//
fetch(apiUrl)
  .then(response => {
    if (response.ok) {
      return response.json();
    }
  })
  .then(data => {
    //-----Pulls Current City Weather Data based off-----//
    //-----Lat/Lon coordinates from openWeather API----// 
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
    //Pulls Five-Day-Forecast Data for Charlotte NC from OpenWeather API---//
    console.log(fiverData);
    //------------------------------//
    //--------5-Day-Forecast-------//
    //------------------------------//
    var fiverDate = document.getElementsByClassName('fiver-date')[0];
    var fiverIcon = document.getElementsByClassName('fiver-icon')[0];
    var fiverTemp = document.getElementsByClassName('fiver-temp')[0];
    var fiverWind = document.getElementsByClassName('fiver-wind')[0];
    var fiverHumid = document.getElementsByClassName('fiver-humid')[0];
    //----Function writeFiver CREATE FUNcTION TO WRITE FIVE_DAY_FORECAST--//
    //----TO FIVER_CONTENT---//
  })
