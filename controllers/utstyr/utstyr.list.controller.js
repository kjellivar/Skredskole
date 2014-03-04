
myapp.controller("utstyrListCtrl", function($scope, $rootScope){

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
        $scope.sjekkFasit($scope.containerObject);
    });

    $scope.visAntallKorrekteSvar =  function() {

        var newAnswers = $scope.containerObject.svar;
        $scope.runProgressbarAnimation($scope.containerObject);

        $scope.alerts = [{
            show: !(newAnswers.skredsoker && newAnswers.spade && newAnswers.sokestang),
            text: "Skredsøker, spade og sondestang er helt nødvendig for å kunne ferdes i snøskredterreng!"
        },{
            show: !newAnswers.mobiltelefon,
            text: "En mobiltelefon er nyttig i tilfelle nødsituasjon!"
        },{
            show: !newAnswers.kartKompassHoydemaler,
            text: "Kart, kompass og høydemåler er viktig for å kunne orientere seg!"
        },{
            show: !newAnswers.forstehjelpssett,
            text: "Førstehjelpsutstyr er viktig for å kunne ta hånd om småskader etc!"
        }];

    };

    $scope.forrige = "info/alpine-farer";
    $scope.neste = "utstyr/deltakere";
  
});