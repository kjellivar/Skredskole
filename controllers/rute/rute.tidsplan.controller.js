myapp.controller("ruteTidsplanCtrl", function($scope, sjekkFasit, runProgressbarAnimation, AlertObject){


    $scope.forrige = "rute/distanse";
    $scope.neste = "kritiske-omrader/egenskaper";
    $scope.containerObject = $scope.rute.tidsplan;

    $scope.$watchCollection('rute.tidsplan.svar', function() {
        sjekkFasit($scope.containerObject);
    });

    $scope.visAntallKorrekteSvar =  function() {

        runProgressbarAnimation($scope.containerObject);

        $scope.alerts = [{
            show: !(newAnswers.oppstigning && newAnswers.nedfart && newAnswers.pause),
            text: "Fyll inn alle tider!"
        }, {
            show: !(newAnswers.startTid && newAnswers.spesifikkStart),
            text: "Krever skredfaresituasjonen at man starter tidlig på morgenen?"
        }];

    };
  
});