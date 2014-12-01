skredskoleAngularApp.controller("infoAlpineFarerCtrl", ["$scope", "AppData", function($scope, AppData){

    $scope.alerts = {"Hvilke alpine farer kan det være på turen?": ['fall','bresprekker','skalver','klipper','vindavkjoling']};

    $scope.turTittel = AppData.turTittel;
 
    $scope.forrige = "info.vaer";
    $scope.neste = "utstyr.list";
  
}]);