let btn = document.getElementById('search-city');
let tempText = document.getElementById('temp-text');
let cityText = document.getElementById('city-text');
let coordText = document.getElementById('coord-text');
let windText = document.getElementById('wind-text');
let humidityText = document.getElementById('humidity-text');
let cloudText = document.getElementById('cloud-text');
let descText = document.getElementById('desc-text');
let imgIcon = document.getElementById('img-icon');
let timeText = document.getElementById('time-text');
let imgBackground = document.getElementsByTagName('html');
let historyCity = document.getElementById('city-history');

let errorEmpty = document.getElementById('error-empty');
errorEmpty.style.display = 'none';

searchWeatherCity('Paris');

const semaine = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"];
const mois = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'];

function searchWeatherCity(city) {

    const url = 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=dc8c9152e8adaad0ec8bf635818c0d42&units=metric&lang=fr';

    let requete = new XMLHttpRequest();
    requete.open('GET', url);

    requete.responseType = 'json';
    requete.send();

    requete.onload = function() {
        if(requete.readyState === XMLHttpRequest.DONE){
            if(requete.status === 200){
                let reponse = requete.response;
                tempText.textContent = reponse.main.temp + '°C';
                cityText.textContent = reponse.name;
                coordText.textContent = reponse.coord.lon + ', ' + reponse.coord.lat;
                windText.textContent = Math.round(reponse.wind.speed * 3.6) + ' Km/h';
                humidityText.textContent = reponse.main.humidity + '%';
                cloudText.textContent = reponse.clouds.all + '%';

                let icon = reponse.weather[0].icon;
                let srcBackground = 'url(./assets/weather-wallpaper/';
                
                switch (icon) {
                    case '01d':
                    case '02d':
                    case '01n':
                    case '02n':
                        srcBackground = srcBackground + 'clear.jpg)';
                        break;
                    case '03d':
                    case '04d':
                    case '03n':
                    case '04n':
                        srcBackground = srcBackground + 'cloudy.jpg)';
                        break;
                    case '09d':
                    case '10d':
                    case '09n':
                    case '10n':
                        srcBackground = srcBackground + 'rain.jpg)';
                        break;
                    case '11d':
                    case '11n':
                        srcBackground = srcBackground + 'thunderstorm.jpg)';
                        break;
                    case '13d':
                    case '13n':
                        srcBackground = srcBackground + 'snow.jpg)';
                        break;
                    case '50d':
                    case '50n':
                        srcBackground = srcBackground + 'mist.jpg)';
                        break;
                    }
                imgIcon.src = 'http://openweathermap.org/img/wn/'+ icon +'.png'
                document.body.style.backgroundImage = srcBackground;

                let desc = reponse.weather[0].description;
                descText.textContent = desc.charAt(0).toUpperCase() + desc.slice(1);

                let time = new Date;
                timeText.textContent = time.getHours() + ':' + time.getMinutes() + ' - ' + semaine[time.getDay() - 1] + ' ' + time.getDate() + ' ' + mois[time.getMonth()] + " '" + time.getFullYear().toString().slice(-2);
            }
        }
    }
}

searchWeatherCity();

btn.addEventListener('click', () => {

    let inputCity = document.getElementById('input-city');

    if(inputCity.value == ""){
        errorEmpty.style.display = 'inline';
    }else{
        searchWeatherCity(inputCity.value);
        let li = document.createElement('li');
        li.textContent = inputCity.value;
        historyCity.append(li);
        inputCity.value = '';
        errorEmpty.style.display = 'none';
    }
});

