myapp.controller("menuCtrl", function($scope, Cleared, $state, AppData){

    $scope.cleared = Cleared;
    $scope.turTittel = AppData.turTittel;



    $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
        var state = $state.current.name.split(".")[0];
        $scope.infoActive = function () {
            if(state === "info"){
                return true;
            } else {
                return false;
            }
        };
        $scope.ruteActive = function () {
            if(state === "rute"){
                return true;
            } else {
                return false;
            }
        };
        $scope.utstyrActive = function () {
            if(state === "utstyr"){
                return true;
            } else {
                return false;
            }
        };
        $scope.kritiskeOmraderActive = function () {
            if(state === "kritiskeOmrader"){
                return true;
            } else {
                return false;
            }
        };
    });



});