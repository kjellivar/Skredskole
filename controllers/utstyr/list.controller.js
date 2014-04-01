
myapp.controller("utstyrListCtrl", function($scope){

    $scope.alerts = {
            "Sender/mottaker, spade og søkestang er nødvendig for å kunne ferdes i snøskredterreng!": ['skredsoker','spade','sokestang'],
            "Kart og kompass er viktig for å kunne orientere seg!": ['kartKompass'],
            "En mobiltelefon er nyttig i tilfelle en nødssituasjon!": ['mobiltelefon'],
            "Førstehjelpssett er viktig for å kunne ta hånd om småskader etc.!":['forstehjelpssett']
        };


    $scope.alleTurDeltakereLabels =
      [{title: "Skredsøker", key: "skredsoker"},
      {title: "Spade", key: "spade"},
      {title: "Søkestang", key: "sokestang"}];

    $scope.tilleggsUtstyrLabels =
      [{title: "Ballongsekk, avalung, skredball", key: "ballongsekkAvalungSkredball"}];

    $scope.annetLabels =
      [{title: "Kart, kompass", key: "kartKompass"},
      {title: "Mobiltelefon", key: "mobiltelefon"},
      {title: "Førstehjelpssett", key: "forstehjelpssett"},
      {title: "Bivuakksekk", key: "bivuakksekk"}];


    //required stuff

    $scope.forrige = "info.alpineFarer";
    $scope.neste = "utstyr.deltakere";
  
});