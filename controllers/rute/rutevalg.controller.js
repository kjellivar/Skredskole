myapp.controller("ruteRutevalgCtrl", function($scope, AppData){

    $scope.alerts = {
        "Tegn inn rute!": ['rutevalg']
    };


    $scope.colors = [{color: "#ff0000", name: "red"}];
    $scope.settings = {
            color: $scope.colors[0].color,
            lineWidth: 3
        };

    $scope.rutevalgDone = function () {
        $scope.rute.rutevalg.svar.rutevalg = true;
    };

    //Required stuff

    $scope.forrige = "utstyr.deltakere";
    $scope.neste = "rute.distanse";

    $scope.ruteTekst = AppData.ruteTekst;
  
});