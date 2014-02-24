myapp.controller("infoAlpineFarerCtrl", function($scope, $rootScope){

    $scope.$watchCollection('info.alpineFarer.svar', function(newAnswers) {
        $scope.sjekkFasit(newAnswers, $scope.info.alpineFarer);
    });
 
    $rootScope.forrige = "info/vaer";
    $rootScope.neste = "utstyr/list";
  
});