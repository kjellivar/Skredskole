myapp.controller("infoAlpineFarerCtrl", function($scope, $rootScope){

    $scope.containerObject = $scope.info.alpineFarer;

    $scope.$watchCollection('info.alpineFarer.svar', function(newAnswers) {
        $scope.sjekkFasit($scope.containerObject);
    });

    $scope.visAntallKorrekteSvar =  function() {
        var newAnswers = $scope.containerObject.svar;
        $scope.runProgressbarAnimation($scope.containerObject);
    };
 
    $rootScope.forrige = "info/vaer";
    $rootScope.neste = "utstyr/list";
  
});