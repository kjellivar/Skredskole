myapp.controller("utstyrDeltakereCtrl", function($scope){

    $scope.alerts = {
            "Hvor stor er gruppen som skal på tur?": ['gruppeStorrelse'],
            "Hvor mye gjennomsnittlig erfaring har turmedlemmene?": ['erfaring'],
            "Hvordan er motivasjonen blant medlemmene i gruppa?": ['motivasjon']
        };

    $scope.customAlerts = function () {
        return [{
            text:"Er alle deltakere informert om ruten, utfordringer og timeplan?",
            show: true
        },
        {
            text:"Er dere mer enn 7 personer blir koordinasjon og tidsstyring innad i gruppen vanskeligere!",
            show: $scope.utstyr.deltakere.svar.gruppeStorrelse > 7
        },
        {
            text:"You already have a good know-how and can achieve a lot. Compensates for your decisions against each other, to remain aware of the risks and enjoy your tours!",
            show: ($scope.utstyr.deltakere.svar.erfaring == 2 && $scope.utstyr.deltakere.svar.motivasjon == 1) ||
                ($scope.utstyr.deltakere.svar.erfaring == 3 && $scope.utstyr.deltakere.svar.motivasjon == 1)
        },
        {
            text:"Det er en god strategi å gå sakte fram og tilegne deg så mye erfaring som mulig.",
            show: ($scope.utstyr.deltakere.svar.erfaring == 1 && ($scope.utstyr.deltakere.svar.motivasjon == 1 || $scope.utstyr.deltakere.svar.motivasjon == 2)) ||
                ($scope.utstyr.deltakere.svar.erfaring == 2 && $scope.utstyr.deltakere.svar.motivasjon == 2) ||
                ($scope.utstyr.deltakere.svar.erfaring == 3 && $scope.utstyr.deltakere.svar.motivasjon == 2)
        },
        {
            text:"Warning: Wrong ambition often makes us enter into a high risk. Remember. Werner Munter one coined the expression - be careful expert, the avalanche does not know that you're an expert!",
            show: $scope.utstyr.deltakere.svar.motivasjon == 3
        }];
    };

  $scope.forrige = "utstyr.list";
  $scope.neste = "rute.rutevalg";

});