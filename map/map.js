(function(L){
    var map_locations = [
        {loc: [60.899823, 8.550659],
        text: "<h1><a href='../index.html'>Kyrkjebønosi</a></h1>"},
        {loc: [61.358199, 6.822912],
            text: "Frudalshesten"},
        {loc: [61.441879, 7.800351],
            text: "Store ringstind"},
        {loc: [62.815587, 9.414607],
            text: "Svarthetta"},
        {loc: [62.882594, 8.882990],
            text: "Blånebba"},
        {loc: [62.60741, 7.60178],
            text: "Skarven"},
        {loc: [69.676, 18.443],
            text: "Skittentinden"},
        {loc: [1, 1],
            text: "Fagerfjell"}
    ];

    var map = L.map('map').setView([65.555671, 13.412468], 5);

    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        maxZoom: 18,
        attribution: ''
    }).addTo(map);

    for (var i = 0; i < map_locations.length; i++) {
        var o = map_locations[i];
        L.marker(map_locations[i].loc).addTo(map)
            .bindPopup(map_locations[i].text);
    }
})(L);


