function getWeather() {
    var apiKey = '45f7c0eca13785564cdc97bc05e822ec'; // Votre clé API OpenWeatherMap
    var latitude = -21.1334; // Latitude de l'île de la Réunion
    var longitude = 55.5318; // Longitude de l'île de la Réunion
    var apiUrl = 'https://api.openweathermap.org/data/2.5/weather?lat=' + latitude + '&lon=' + longitude + '&units=metric&appid=' + apiKey;

    $.ajax({
        url: apiUrl,
        method: 'GET',
        dataType: 'json',
        success: function(data) {
            // Traitement des données de la météo
            var temperature = data.main.temp;
            var weatherDescription = data.weather[0].description;
            var iconCode = data.weather[0].icon;
            var iconUrl = 'https://openweathermap.org/img/wn/' + iconCode + '.png';

            // Mise à jour de la div avec les données de la météo
            var weatherDiv = $('#weather');
            weatherDiv.empty();
            weatherDiv.append('<p>Température: ' + temperature + '°C</p>');
            weatherDiv.append('<p>Description: ' + weatherDescription + '</p>');
            weatherDiv.append('<img src="' + iconUrl + '" alt="Weather Icon">');
        },
        error: function(xhr, status, error) {
            console.log('Erreur lors de la récupération des données de la météo:', error);
        }
    });
}

$(document).ready(function() {
    // Appel initial pour obtenir la météo
    getWeather();

    // Actualisation périodique de la météo toutes les 10 minutes (600000 ms)
    setInterval(getWeather, 600000);
});
