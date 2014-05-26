myapp.controller("ruteDistanseCtrl", function($scope, AppData){

    $scope.forrige = "rute.rutevalg";
    $scope.neste = "rute.tidsplan";

    $scope.alerts = {
        "Skriv inn en horisontal distanse!": ['lengde'],
        "Prøv og finn ut høydeforskjellen!": ['hoyde']
    };

    $scope.bilder = AppData.bilder;
});
  
  
