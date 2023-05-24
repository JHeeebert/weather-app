function getWeather( cityID )
var key = 'fe42dea56a0b0145a88eb1216ff5491d';
fetch('https://api.openweathemap.org/data.2.5.weather?id=' + cityID+ '&appid=' + key)
.then(function(resp) { return resp.json()})
.then(function(data){
  console.log(data)
})
.catch(function(){
  });
window.onload = function() {
  getWeather( 6167865 )
}
