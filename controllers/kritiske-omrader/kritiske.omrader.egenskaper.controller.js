myapp.controller("kritiskeOmraderEgenskaperCtrl", function($scope, $rootScope){

  if($rootScope.kritiskeOmrader.egenskaper === undefined){
    $scope.kritiskeOmrader.egenskaper = {};
    $scope.kritiskeOmrader.egenskaper.omrader = [{},{}];
    
    $scope.kritiskeOmrader.egenskaper.omrader[0].himmelRetninger = 
      [{title: "N"}, {title: "NØ"}, {title: "Ø"}, {title: "SØ"}, 
      {title: "S"}, {title: "SV"}, {title: "V"}, {title: "NV"}];
    $scope.kritiskeOmrader.egenskaper.omrader[0].utsatteOmrader = 
      [{title: "Bratte heng (over 30°)"},
      {title: "Leområder, leheng"},
      {title: "Renner, depresjoner"},
      {title: "Områder med mye steiner/blokker"}];
    $scope.kritiskeOmrader.egenskaper.omrader[1].himmelRetninger = 
      [{title: "N"}, {title: "NØ"}, {title: "Ø"}, {title: "SØ"}, 
      {title: "S"}, {title: "SV"}, {title: "V"}, {title: "NV"}];
    $scope.kritiskeOmrader.egenskaper.omrader[1].utsatteOmrader = 
      [{title: "Bratte heng (over 30°)"},
      {title: "Leområder, leheng"},
      {title: "Renner, depresjoner"},
      {title: "Områder med mye steiner/blokker"}];

  }
  $scope.showPoints = false;
  $scope.togglePoints = function () {
    $scope.showPoints = !$scope.showPoints;
  }
  
  $rootScope.forrige = "rute/tidsplan";
  $rootScope.neste = "kritiske-omrader/sjekk";
  

});