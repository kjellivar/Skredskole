myapp.controller("ruteTidsplanCtrl", function($scope, AppData){

    $scope.alerts = {
        "Fyll inn alle tider!": ['oppstigning', 'nedfart', 'pause'],
        "Krever skredfaresituasjonen at man starter tidlig på morgenen?": ['startTid', 'spesifikkStart']
    };

    $scope.forrige = "rute/distanse";
    $scope.neste = "kritiske-omrader/egenskaper";

    $scope.turTittel = AppData.turTittel;
    $scope.hoydeMeter = AppData.hoydeMeter;
  
});