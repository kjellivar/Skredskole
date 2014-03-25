myapp.controller("menuCtrl", function($scope, Cleared, $state, AppData){

    $scope.cleared = Cleared;
    $scope.turTittel = AppData.turTittel;


    $scope.$on('$stateChangeSuccess', function(){
        var state = $state.current.name.split(".")[0];
        $scope.infoActive = function () {
            return state === "info";
        };
        $scope.ruteActive = function () {
            return state === "rute";
        };
        $scope.utstyrActive = function () {
            return state === "utstyr";
        };
        $scope.kritiskeOmraderActive = function () {
            return state === "kritiskeOmrader";
        };
    });



});