let weather={
    "apikey":"0909700ed438d894c371376df1011ad2",
    fetchWeather:function(city){
        fetch("https://api.openweathermap.org/data/2.5/weather?q="+ city +"&units=metric&lang=az&appid="+ this.apikey)
        //https://api.openweathermap.org/data/2.5/weather?q=Sumqayit&units=metric&lang=az&appid=0909700ed438d894c371376df1011ad2
        .then((response)=>response.json())
        .then((data)=>this.displayWeather(data));
    },

    displayWeather: function(data){
const {name}=data;
const {icon,description}=data.weather[0];
const {temp,humidity}=data.main;
const {speed}=data.wind;
console.log(name,icon,description,temp,humidity,speed);
document.querySelector(".city").innerText= "" + name;
document.querySelector(".icon").src="https://openweathermap.org/img/wn/"+ icon +"@2x.png";
document.querySelector(".description").innerText= description;
document.querySelector(".temp").innerText= temp+ "  C";
document.querySelector(".humidity").innerText= "Rutubətlilik "+ humidity+"%";
document.querySelector(".wind").innerText= "Kuləyin surəti "+ speed+"km/h";
//document.body.style.backgroundImage="url('http://source.unsplash.com/1600*900/?"+ name +"')"
},

search:function(){
    this.fetchWeather(document.querySelector(".search-bar").value);
}
    };

    document
    .querySelector(".search button")
    .addEventListener("click",function(){
        weather.search();
    });

    document
    .querySelector(".search-bar")
    .addEventListener("keyup",function(event){
        if(event.key == "Enter"){
            weather.search();
        }
    });

    weather.fetchWeather("Sumqayit");
