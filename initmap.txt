function initMap() {
    // Coordonnées de La Réunion
    var reunion = {lat: -21.115141, lng: 55.536384};

    // Options de la carte
    var mapOptions = {
        center: reunion,
        zoom: 10
    };

    // Création de la carte
    var map = new google.maps.Map(document.getElementById('map'), mapOptions);

    // Ajoutez ici vos marqueurs ou calques de carte supplémentaires pour les randonnées
}

