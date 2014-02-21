myapp.controller("ruteDistanseCtrl", function($scope, $rootScope){
  
  if($rootScope.rute.distanse === undefined){
    $scope.rute.distanse = {};
    
  }
  
  $rootScope.forrige = "rute/rutevalg";
  $rootScope.neste = "rute/tidsplan";
  
  
});