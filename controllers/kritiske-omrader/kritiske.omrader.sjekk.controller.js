myapp.controller("kritiskeOmraderSjekkCtrl", function($scope){

    $scope.containerObject = $scope.kritiskeOmrader.sjekk;
    $scope.forrige = "kritiske-omrader/egenskaper";
    $scope.neste = "kritiske-omrader/nedkjoring";

    $scope.$watchCollection('kritiskeOmrader.sjekk.svar', function() {
        $scope.sjekkFasit($scope.containerObject);
    });

    $scope.visAntallKorrekteSvar =  function() {
        var newAnswers = $scope.containerObject.svar;
        $scope.runProgressbarAnimation($scope.containerObject);
    };



});