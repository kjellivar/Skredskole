myapp.controller("infoSkredvarselCtrl", function($scope, AppData){

    $scope.alerts = {
            "Hva er varslet faregrad?": ['faregrad'],
            "Hva slags type skredproblem kan man møte?": ['skredproblem'],
            "Hva er mest utsatt himmelretning?": ['n','no','o','so','s','sv','v','nv'],
            "Hvordan er snødekket?": ['nySno','vindtransportertSno','svakeLagISnopakken','vatOgVannmettetSno'],
            "Hva er de mest utsatte områdene?": ['bratteHeng','leomrader','terrengfeller','overgangFraLiteTilMyeSno'],
            "Hva er mest utsatt høydenivå?": ['hoydeniva'],
            "Hva er varslet sannsynlighet for skred?": ['sannsynlighet'],
            "Hva er varslet skredstørrelse?": ['skredstorrelse'],
            "Hva er varslet tilleggsbelastning?": ['tilleggsbelastning']
        };

    $scope.himmelRetningerLabels =
      [{title: "N", key: "n"}, {title: "NØ", key: "no"}, {title: "Ø", key: "o"}, {title: "SØ", key: "so"},
      {title: "S", key: "s"}, {title: "SV", key: "sv"}, {title: "V", key: "v"}, {title: "NV", key: "nv"}];


    $scope.faregrader = {values: [{v: 1, t: '1'},{v: 2, t: '2'},{v: 3, t: '3'},{v: 4, t: '4'},{v: 5, t: '5'}],
    name: "Faregrad"};

    $scope.damageSize = {values: [{v:4, t: "Svært store"}, {v: 3, t: "Store"}, {v: 2, t: "Middels"}, {v: 1, t: "Små"}],
        name:"Forventet skredstørrelse", vertical: true};

    $scope.probability = {values: [{v:4, t: "Meget sannsynlig"}, {v: 3, t: "Sannsynlig"}, {v: 2, t: "Mulig"}, {v: 1, t: "Lite sannsynlig"}],
        name:"Sannsynlighet for å utløse snøskred", vertical: true};

    $scope.tilleggsbelastning = {values: [{v:"naturlig", t: "Naturlig utløst"}, {v: "liten", t: "Liten"}, {v: "stor", t: "Stor"}],
        name:"Tilleggsbelastning", vertical: true};

    $scope.forrige = "info.info";
    $scope.neste = "info.vaer";

    $scope.infoVarslingsOmrade = AppData.infoVarslingsOmrade;
    $scope.skredvarselLink = AppData.skredvarselLink;

});