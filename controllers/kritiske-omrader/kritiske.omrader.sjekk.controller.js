myapp.controller("kritiskeOmraderSjekkCtrl", function($scope, sjekkFasit, runProgressbarAnimation, AlertObject){

    $scope.containerObject = $scope.kritiskeOmrader.sjekk;
    $scope.forrige = "kritiske-omrader/egenskaper";
    $scope.neste = "kritiske-omrader/nedkjoring";

    $scope.$watchCollection('kritiskeOmrader.sjekk.svar', function() {
        sjekkFasit($scope.containerObject);
    });

    $scope.visAntallKorrekteSvar =  function() {

        runProgressbarAnimation($scope.containerObject);
    };



});