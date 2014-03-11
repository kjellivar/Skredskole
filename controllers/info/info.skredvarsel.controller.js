myapp.controller("infoSkredvarselCtrl", function($scope, $rootScope, $timeout){

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

        var newAnswers = $scope.containerObject.svar,
            fasit = $scope.containerObject.fasit;
        $scope.runProgressbarAnimation($scope.containerObject);

        $scope.alerts = [
            createAlertObject("Hva er mest utsatt himmelretning?", ['n','no','o','so','s','sv','v','nv']),
            createAlertObject("Hvordan er snødekket?", ['nySno','vindtransportertSno','svakeLagISnopakken','vatOgVannmettetSno']),
            createAlertObject("Hva er de mest utsatte områdene?", ['bratteHeng','omraderNaerRygger','terrengFeller','overgangFraLiteTilMyeSno']),
            createAlertObject("Hva er mest utsatt høydenivå?", ['hoydeniva']),
            createAlertObject("Hva er varslet faregrad?", ['faregrad']),
            createAlertObject("Hva er varslet sannsynlighet for skred?", ['sannsynlighet']),
            createAlertObject("Hva er varslet skredstørrelse?", ['skredstorrelse']),
            createAlertObject("Hva er varslet tilleggsbelastning?", ['tilleggsbelastning'])
        ];

        function createAlertObject(text, keys){
            var show = false;
            var i = 0;
            for(i = 0; i < keys.length; i = i + 1){
                if(newAnswers[keys[i]] !== fasit[keys[i]] && !(newAnswers[keys[i]] === false || fasit[keys[i]] === undefined)){
                    show = true;
                    break;
                }
            }

            return {
                text: text,
                show: show
            }
        }


    };

    $scope.$watchCollection('info.skredvarsel.svar', function() {
        $scope.sjekkFasit($scope.containerObject);
    });

    $scope.forrige = false;
    $scope.neste = "info/vaer";



});