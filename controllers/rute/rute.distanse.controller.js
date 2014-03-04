myapp.controller("ruteDistanseCtrl", function($scope){

    $scope.forrige = "rute/rutevalg";
    $scope.neste = "rute/tidsplan";

    $scope.containerObject = $scope.rute.distanse;

    $scope.$watchCollection('rute.distanse.svar', function() {
        $scope.sjekkFasit($scope.containerObject);
    });

    $scope.visAntallKorrekteSvar =  function() {

        var newAnswers = $scope.containerObject.svar;
        $scope.runProgressbarAnimation($scope.containerObject);

        $scope.alerts = [{
            show: !(newAnswers.lengde),
            text: "Skriv inn en horisontal distanse!"
        }, {
            show: !(newAnswers.hoyde),
            text: "Prøv og finn ut høydeforskjellen!"
        }];

    };
  
  
});