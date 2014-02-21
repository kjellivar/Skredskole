myapp.controller("ruteTidsplanCtrl", function($scope, $rootScope, $log){
  
  if($rootScope.rute.tidsplan === undefined){
    $scope.rute.tidsplan = {};
    $scope.rute.tidsplan.oppstigning = 1;
    $scope.rute.tidsplan.nedfart = 1;
    $scope.rute.tidsplan.pause = 0.5;
    
    
    
  }
  
  $scope.checkFasit = function(scope, key){
    if(scope[key] == scope.fasit[key]){
      //$scope.
    }
  }
  
  $rootScope.forrige = "rute/distanse";
  $rootScope.neste = "kritiske-omrader/egenskaper";
  
});