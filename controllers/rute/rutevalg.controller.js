myapp.controller("ruteRutevalgCtrl", function($scope, AppData){

    $scope.alerts = {
        "Tegn inn rute!": ['rutevalg']
    };

    $scope.settings = {
            color: "#0000FF",
            lineWidth: 3
        };

    $scope.rutevalgDone = function () {
        $scope.rute.rutevalg.svar.rutevalg = true;
    };

    //Required stuff

    $scope.forrige = "utstyr.deltakere";
    $scope.neste = "rute.distanse";

    $scope.ruteTekst = AppData.ruteTekst;
    $scope.bilder = AppData.bilder;
  
});