myapp.controller("ruteTidsplanCtrl", function($scope, AppData, Rute){

    $scope.alerts = {
        "Fyll inn alle tider.": ['oppstigning', 'nedfart', 'pause'],
        "Krever skredfaresituasjonen at man starter tidlig på morgenen?": ['startTid', 'spesifikkStart']
    };

    Rute.tidsplan.svar.pause = 0.5;

    $scope.forrige = "rute.distanse";
    $scope.neste = "kritiskeOmrader.egenskaper";

    $scope.turTittel = AppData.turTittel;
    $scope.hoydeMeter = AppData.hoydeMeter;
  
});