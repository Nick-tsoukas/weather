const request = require("request");
const apiKey = "e3e5522fd8b9b6945a917d3dcdbd37d3";
let city = "portland";
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`

request(url, (err,res,body) => {
  if(err) {
    console.log(err)
  } else {
    let weather = JSON.parse(body);
    let message = `It's ${weather.main.temp} degrees in ${weather.name}!`;
    console.log(message);
  }
});
