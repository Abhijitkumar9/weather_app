// const apiKey= "03f877955f3809e52c8c675a24014b48";
// const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=bangalore"
// const searchBox=document.querySelector(".search input")
// const searchBtn=document.querySelector(".search button")
// const weatherIcon=document.querySelector(".weather-icon")

// async function checkWeather(city){
//     const response = await fetch(apiUrl+ city +`&appid=${apiKey}`);
//     var data= await response.json();
//     console.log(data);

//     document.querySelector(".city").innerHTML =data.name;           d
//     document.querySelector(".temp").innerHTML =Math.round(data.main.temp) + "°C";
//     document.querySelector(".humidity").innerHTML =data.main.humodity+"%";
//     document.querySelector(".wind").innerHTML =data.wind.speed+"km/h";

// }


// searchBtn.addEventListener("click", () =>{
//  checkWeather(searchBox.value);
//  })