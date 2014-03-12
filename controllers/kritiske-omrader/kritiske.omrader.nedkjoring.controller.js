myapp.controller("kritiskeOmraderNedkjoringCtrl", function($scope, sjekkFasit, runProgressbarAnimation, AlertObject){

    $scope.containerObject = $scope.kritiskeOmrader.nedkjoring;
    $scope.forrige = "kritiske-omrader/sjekk";
    $scope.neste = "planleggingsskjema";

    $scope.$watchCollection('kritiskeOmrader.nedkjoring.svar', function() {
        sjekkFasit($scope.containerObject);
    });

    $scope.visAntallKorrekteSvar =  function() {
        runProgressbarAnimation($scope.containerObject);
    };



});