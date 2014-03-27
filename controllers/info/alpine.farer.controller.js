myapp.controller("infoAlpineFarerCtrl", ["$scope", function($scope){

    $scope.alerts = {"Hvilke alpine farer kan det være på turen?": ['fall','bresprekker','skalver','klipper','vindavkjoling']};
 
    $scope.forrige = "info.vaer";
    $scope.neste = "utstyr.list";
  
}]);