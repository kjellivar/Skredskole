myapp.controller("ruteDistanseCtrl", function($scope, AppData){

    $scope.forrige = "rute.rutevalg";
    $scope.neste = "rute.tidsplan";

    $scope.alerts = {
        "Har du fylt inn rett horisontal distanse?": ['lengde'],
        "Prøv å finn ut høydeforskjellen.": ['hoyde']
    };

    $scope.bilder = AppData.bilder;
});
  
  
