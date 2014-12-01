skredskoleAngularApp.controller("utstyrDeltakereCtrl", function($scope){

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
            text:"Er dere mer enn 7 personer blir koordinasjon og tidsstyring innad i gruppen vanskeligere.",
            show: $scope.utstyr.deltakere.svar.gruppeStorrelse > 7
        },
        {
            text:"You already have a good know-how and can achieve a lot. Compensates for your decisions against each other, to remain aware of the risks and enjoy your tours!",
            show: ($scope.utstyr.deltakere.svar.erfaring == 2 && $scope.utstyr.deltakere.svar.motivasjon == 1) ||
                ($scope.utstyr.deltakere.svar.erfaring == 3 && $scope.utstyr.deltakere.svar.motivasjon == 1)
        },
        {
            text:"Det anbefales å velge terrenget etter skredforholdene og din turgruppes kunnskapsnivå. Et terreng med mange mulige utløsningsområder (over 30°) og utløpsområder krever at dere må gjøre mange vurderinger og har en god evne til å ferdes på en tryggest mulig måte.",
            show: ($scope.utstyr.deltakere.svar.erfaring == 1 && ($scope.utstyr.deltakere.svar.motivasjon == 1 || $scope.utstyr.deltakere.svar.motivasjon == 2)) ||
                ($scope.utstyr.deltakere.svar.erfaring == 2 && $scope.utstyr.deltakere.svar.motivasjon == 2) ||
                ($scope.utstyr.deltakere.svar.erfaring == 3 && $scope.utstyr.deltakere.svar.motivasjon == 2)
        },
        {
            text:"Høye ambisjoner gjør at vi gjerne velger å ta høyere risiko enn hva vi egentlig ønsker. Husk at snøskredet ikke bryr seg om ditt kunnskapsnivå.",
            show: $scope.utstyr.deltakere.svar.motivasjon == 3
        }];
    };

  $scope.forrige = "utstyr.list";
  $scope.neste = "rute.rutevalg";

});