myapp.controller("infoAlpineFarerCtrl", function($scope, sjekkFasit, runProgressbarAnimation, AlertObject){

    $scope.containerObject = $scope.info.alpineFarer;

    $scope.$watchCollection('info.alpineFarer.svar', function() {
        sjekkFasit($scope.containerObject);
    });

    $scope.visAntallKorrekteSvar =  function() {
        runProgressbarAnimation($scope.containerObject);
        $scope.alerts =
            AlertObject({
                "Hvilke alpine farer kan det være på turen?": ['fall','bresprekker','skalver','klipper','vindavkjoling']
            }, $scope.containerObject);
    };
 
    $scope.forrige = "info/vaer";
    $scope.neste = "utstyr/list";
  
});