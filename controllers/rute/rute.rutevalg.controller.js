myapp.controller("ruteRutevalgCtrl", function($scope, $rootScope){
  
  if($rootScope.rute.rutevalg === undefined){
    $scope.rute.rutevalg = {};
    
  }
  $scope.colors = [{color: "#ff0000", name: "red"}];
  $scope.settings = {
            color: $scope.colors[0].color,
            lineWidth: 3
        };
  $rootScope.forrige = "utstyr/deltakere";
  $rootScope.neste = "rute/distanse";
  
});