
myapp.controller("utstyrListCtrl", function($scope, sjekkFasit, runProgressbarAnimation, AlertObject){

    $scope.containerObject = $scope.utstyr.list;

    $scope.alleTurDeltakereLabels =
      [{title: "Skredsøker", key: "skredsoker"},
      {title: "Spade", key: "spade"},
      {title: "Søkestang", key: "sokestang"}];

    $scope.tilleggsUtstyrLabels =
      [{title: "Ballongsekk, avalung, skredball", key: "ballongsekkAvalungSkredball"}];

    $scope.annetLabels =
      [{title: "Kart, kompass, høydemåler", key: "kartKompassHoydemaler"},
      {title: "Mobiltelefon", key: "mobiltelefon"},
      {title: "Førstehjelpssett", key: "forstehjelpssett"},
      {title: "Bivuakksekk", key: "bivuakksekk"}];


    //required stuff
    $scope.$watchCollection('utstyr.list.svar', function() {
        sjekkFasit($scope.containerObject);
    });

    $scope.visAntallKorrekteSvar =  function() {

        runProgressbarAnimation($scope.containerObject);
        $scope.alerts =
            AlertObject({
                "Sender/mottaker, spade og søkestang er nødvendig for å kunne ferdes i snøskredterreng!": ['skredsoker','spade','sokestang'],
                "Kart, kompass og høydemåler er viktig for å kunne orientere seg!": ['kartKompassHoydemaler'],
                "En mobiltelefon er nyttig i tilfelle en nødssituasjon!": ['mobiltelefon'],
                "Førstehjelpssett er viktig for å kunne ta hånd om småskader etc.!":['forstehjelpssett']
            }, $scope.containerObject);

    };

    $scope.forrige = "info/alpine-farer";
    $scope.neste = "utstyr/deltakere";
  
});