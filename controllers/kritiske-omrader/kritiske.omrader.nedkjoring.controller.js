myapp.controller("kritiskeOmraderNedkjoringCtrl", function($scope){

    $scope.containerObject = $scope.kritiskeOmrader.nedkjoring;
    $scope.forrige = "kritiske-omrader/sjekk";
    $scope.neste = "planleggingsskjema";

    $scope.$watchCollection('kritiskeOmrader.nedkjoring.svar', function() {
        $scope.sjekkFasit($scope.containerObject);
    });

    $scope.visAntallKorrekteSvar =  function() {
        var newAnswers = $scope.containerObject.svar;
        $scope.runProgressbarAnimation($scope.containerObject);
    };



});