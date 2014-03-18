myapp.controller("ruteRutevalgCtrl", function($scope, sjekkFasit, korrekteSvar, CurrentPageObject, AppData){

    $scope.containerObject = CurrentPageObject();

    $scope.visAntallKorrekteSvar =  function() {

        $scope.alerts = [{
            show: !(newAnswers.rutevalg),
            text: "Tegn inn rute!"
        }];

    };

    $scope.$watchCollection('containerObject.svar', function() {
        sjekkFasit();
    });

    $scope.colors = [{color: "#ff0000", name: "red"}];
    $scope.settings = {
            color: $scope.colors[0].color,
            lineWidth: 3
        };

    $scope.rutevalgDone = function () {
        $scope.containerObject.svar.rutevalg = true;
    };

    //Required stuff

    $scope.forrige = "utstyr/deltakere";
    $scope.neste = "rute/distanse";

    $scope.ruteTekst = AppData.ruteTekst;




  
});