skredskoleAngularApp.controller("infoInfoCtrl", function($scope, AppData){

    $scope.infoVarslingsOmrade = AppData.infoVarslingsOmrade;
    $scope.info.info.item.cleared = true;

    $scope.forrige = "start";
    $scope.neste = "info.skredvarsel";

});