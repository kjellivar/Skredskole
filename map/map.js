(function(L){
    var map_locations = [
        {pos: [60.899823, 8.550659],
        text: "<h1><a href='../index.html'>Kyrkjebønosi</a></h1>"},
        {pos: [61.358199, 6.822912],
            text: "Frudalshesten"},
        {pos: [61.441879, 7.800351],
            text: "Store ringstind"},
        {pos: [60.96893, 8.31810],
            text: "Svarthetta"},
        {pos: [62.882594, 8.882990],
            text: "<h1><a href='../blanebba.html'>Blånebba</a></h1>"},
        {pos: [62.60741, 7.60178],
            text: "Skarven"},
        {pos: [69.676, 18.443],
            text: "Skittentinden"},
        {pos: [1, 1],
            text: "Fagerfjell"}
    ];

    var map = L.map('map').setView([65.555671, 13.412468], 5);

    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        maxZoom: 18,
        attribution: ''
    }).addTo(map);

    for (var i = 0; i < map_locations.length; i++) {
        var loc = map_locations[i];
        L.marker(loc.pos).addTo(map)
            .bindPopup(loc.text);
    }
})(L);


