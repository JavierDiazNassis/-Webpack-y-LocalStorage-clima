
const {weather} = require('./weather');
const {UI} = require('./UI')
const Weather = new  weather ('London', 'uk')

 const ui = new UI();
require('./index.css');
 async function fetcheWeather(){
 const  data = await Weather.getweather();
 console.log(data);
 ui.render(data);
}
document.getElementById('w-change-btn').addEventListener('click',(e) => {
const city = document.getElementById('city').value;
const countryCode = document.getElementById('countryCode').value;
console.log(city, countryCode);
Weather.changeLocation(city, countryCode);
fetcheWeather();
e.preventDefault();

});
document.addEventListener('DOMContentLoaded', fetcheWeather);