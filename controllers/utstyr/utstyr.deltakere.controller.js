myapp.controller("utstyrDeltakereCtrl", function($scope, $rootScope, $log){
  
  
  if($rootScope.utstyr.deltakere === undefined){
    $scope.utstyr.deltakere = {};

  } 
  
  $rootScope.forrige = "utstyr/list";
  $rootScope.neste = "rute/rutevalg";

});