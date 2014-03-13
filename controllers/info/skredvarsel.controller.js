myapp.controller("infoSkredvarselCtrl", function($scope, AlertObject, sjekkFasit, runProgressbarAnimation){

    $scope.containerObject = $scope.info.skredvarsel;
  
    $scope.himmelRetningerLabels =
      [{title: "N", key: "n"}, {title: "NØ", key: "no"}, {title: "Ø", key: "o"}, {title: "SØ", key: "so"},
      {title: "S", key: "s"}, {title: "SV", key: "sv"}, {title: "V", key: "v"}, {title: "NV", key: "nv"}];

    $scope.snoDekkeLabels =
      [{title: "Nysnø", key: "nySno"},
      {title: "Vindtransportert snø", key: "vindtransportertSno"},
      {title: "Svake lag i snøpakken", key: "svakeLagISnopakken"},
      {title: "Våt og vannmettet snø", key: "vatOgVannmettetSno"}];

    $scope.utsatteOmraderLabels =
      [{title: "Bratte heng (>30°)", key: "bratteHeng"},
      {title: "Områder nær rygger", key: "omraderNaerRygger"},
      {title: "Terrengfeller", key: "terrengFeller"},
      {title: "Overgang fra lite til mye snø", key: "overgangFraLiteTilMyeSno"}];

    $scope.faregrader = {values: [{v: 1, t: '1'},{v: 2, t: '2'},{v: 3, t: '3'},{v: 4, t: '4'},{v: 5, t: '5'}],
    name: "Faregrad"};

    $scope.damageSize = {values: [{v:5, t: "Svært store"}, {v: 4, t: "Store"}, {v: 3, t: "Middels"}, {v: 2, t: "Små"}],
        name:"Skredstørrelse", vertical: true};

    $scope.probability = {values: [{v:5, t: "Meget sannsynlig"}, {v: 4, t: "Sannsynlig"}, {v: 3, t: "Mulig"}, {v: 2, t: "Lite sannsynlig"}],
        name:"Sannsynlighet", vertical: true};

    $scope.tilleggsbelastning = {values: [{v:"naturlig", t: "Naturlig"}, {v: "liten", t: "Liten"}, {v: "stor", t: "Stor"}],
        name:"Tilleggsbelastning"};

    $scope.tilleggsbelastning = {values: [{v:"naturlig", t: "Naturlig"}, {v: "liten", t: "Liten"}, {v: "stor", t: "Stor"}],
        name:"Tilleggsbelastning"};


    $scope.visAntallKorrekteSvar =  function() {

        runProgressbarAnimation($scope.containerObject);

        $scope.alerts =
            AlertObject({
                "Hva er mest utsatt himmelretning?": ['n','no','o','so','s','sv','v','nv'],
                "Hvordan er snødekket?": ['nySno','vindtransportertSno','svakeLagISnopakken','vatOgVannmettetSno'],
                "Hva er de mest utsatte områdene?": ['bratteHeng','omraderNaerRygger','terrengFeller','overgangFraLiteTilMyeSno'],
                "Hva er mest utsatt høydenivå?": ['hoydeniva'],
                "Hva er varslet faregrad?": ['faregrad'],
                "Hva er varslet sannsynlighet for skred?": ['sannsynlighet'],
                "Hva er varslet skredstørrelse?": ['skredstorrelse'],
                "Hva er varslet tilleggsbelastning?": ['tilleggsbelastning']
            }, $scope.containerObject);

    };

    $scope.$watchCollection('info.skredvarsel.svar', function() {
        sjekkFasit($scope.containerObject);
    });

    $scope.forrige = false;
    $scope.neste = "info/vaer";



});