skredskoleAngularApp.controller("menuCtrl", function($scope, Cleared, $state, AppData){

    $scope.cleared = Cleared;
    $scope.turTittel = AppData.turTittel;

    $scope.$on('$stateChangeSuccess', function(){
        var completeState = $state.current.name;
        var state = completeState.split(".")[0];

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
        $scope.nedkjoringActive = function () {
            return state === "nedkjoring";
        };
    });
});