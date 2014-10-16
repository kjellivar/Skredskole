myapp.controller("ruteRutevalgCtrl", function($scope, AppData, Rute){

    $scope.rute = Rute;

    $scope.alerts = {
        "Tegn inn rute.": ['rutevalg']
    };

    $scope.customAlerts = function () {
        return [
            {
                text: "Husk å undersøk om du har tegnet inn riktig rute.",
                show: Rute.rutevalg.svar.rutevalg
            }
        ];
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