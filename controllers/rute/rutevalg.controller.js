myapp.controller("ruteRutevalgCtrl", function($scope, sjekkFasit, runProgressbarAnimation, AlertObject){

    $scope.containerObject = $scope.rute.rutevalg;

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

    $scope.$watchCollection('rute.rutevalg.svar', function() {
        sjekkFasit($scope.containerObject);
    });

    $scope.visAntallKorrekteSvar =  function() {


        runProgressbarAnimation($scope.containerObject);

        $scope.alerts = [{
            show: !(newAnswers.rutevalg),
            text: "Tegn inn rute!"
        }];

    };
  
});