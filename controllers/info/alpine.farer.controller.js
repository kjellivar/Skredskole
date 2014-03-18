myapp.controller("infoAlpineFarerCtrl", ["$scope", "sjekkFasit", "korrekteSvar", "CurrentPageObject", function($scope, sjekkFasit, korrekteSvar, CurrentPageObject){

    $scope.containerObject = CurrentPageObject();

    $scope.visAntallKorrekteSvar = function(){
        korrekteSvar({"Hvilke alpine farer kan det være på turen?": ['fall','bresprekker','skalver','klipper','vindavkjoling']});
    };

    $scope.$watchCollection('containerObject.svar', function() {
        sjekkFasit();
    });

 
    $scope.forrige = "info/vaer";
    $scope.neste = "utstyr/list";
  
}]);