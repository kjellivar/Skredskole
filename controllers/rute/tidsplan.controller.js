myapp.controller("ruteTidsplanCtrl", function($scope, sjekkFasit, korrekteSvar, CurrentPageObject, AppData){

    $scope.containerObject = CurrentPageObject();

    $scope.$watchCollection('containerObject.svar', function() {
        sjekkFasit();
    });

    $scope.visAntallKorrekteSvar =  function() {

        $scope.alerts = [{
            show: !(newAnswers.oppstigning && newAnswers.nedfart && newAnswers.pause),
            text: "Fyll inn alle tider!"
        }, {
            show: !(newAnswers.startTid && newAnswers.spesifikkStart),
            text: "Krever skredfaresituasjonen at man starter tidlig på morgenen?"
        }];

    };

    $scope.forrige = "rute/distanse";
    $scope.neste = "kritiske-omrader/egenskaper";

    $scope.turTittel = AppData.turTittel;
    $scope.hoydeMeter = AppData.hoydeMeter;
  
});