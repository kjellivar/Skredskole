myapp.controller("kritiskeOmraderNedkjoringCtrl", function($scope, sjekkFasit, korrekteSvar, CurrentPageObject){

    $scope.containerObject = CurrentPageObject();


    $scope.$watchCollection('containerObject.svar', function() {
        sjekkFasit();
    });

    $scope.visAntallKorrekteSvar =  function() {

    };

    $scope.forrige = "kritiske-omrader/sjekk";
    $scope.neste = "planleggingsskjema";



});