myapp.controller("infoAlpineFarerCtrl", function($scope, $rootScope){
  
  if($rootScope.info.alpineFarer === undefined){
    $scope.info.alpineFarer = {};
  }
  
 
  $rootScope.forrige = "info/vaer";
   $rootScope.neste = "utstyr/list";
  
});