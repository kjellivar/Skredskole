myapp.controller("ruteDistanseCtrl", function($scope, sjekkFasit, korrekteSvar, CurrentPageObject){

    $scope.forrige = "rute/rutevalg";
    $scope.neste = "rute/tidsplan";

    $scope.containerObject = CurrentPageObject();

    $scope.$watchCollection('containerObject.svar', function() {
        sjekkFasit();
    });

    $scope.visAntallKorrekteSvar =  function() {

        $scope.alerts = [{
            show: !(newAnswers.lengde),
            text: "Skriv inn en horisontal distanse!"
        }, {
            show: !(newAnswers.hoyde),
            text: "Prøv og finn ut høydeforskjellen!"
        }];

    };
  
  
});