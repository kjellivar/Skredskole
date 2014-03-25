myapp.directive('nveSubMenuItem', function() {
  return {
    templateUrl: 'partials/directives/nveSubMenuItem.html',
    transclude: true,
    scope: {
      nveSubMenuItem: '='
    }
  };
})
.directive('nveSkredFooter', function() {
    return {
        restrict: "AE",
        scope: {
            alerts: "=",
            customAlerts: "&"
        },
        templateUrl: 'partials/directives/nveSkredFooter.html',
        controller: function($scope, CurrentPageObject, sjekkFasit, korrekteSvar) {
            $scope.containerObject = CurrentPageObject();
            $scope.$watchCollection('containerObject.svar', function() {
                sjekkFasit();
            });
            $scope.visAntallKorrekteSvar =  function() {
                korrekteSvar($scope.alerts);
                if(angular.isFunction($scope.customAlerts)){
                    var custAlertArray = $scope.customAlerts();
                    angular.forEach(custAlertArray, function(val){
                        $scope.containerObject.alerts.push(val);
                    });
                }
            };
        }
    };
})
.directive('nveCheckboxButton', function() {
    return {
        scope: {
            nveCheckboxButton: '='
        },
        transclude: true,
        templateUrl: 'partials/directives/nveCheckboxButton.html'
    };
})
.directive('nveSkredproblemBoks', function() {
    return {
        scope: {
            boks: '=nveSkredproblemBoks',
            nveModel: '='
        },
        transclude: false,
        templateUrl: 'partials/directives/nveSkredproblemBoks.html',
        link: function(scope){
            scope.changeModel = function(val){
                scope.nveModel = val;
            }
        }
    };
})
.directive('nveCompass', function() {
    return {
        scope: {
            nveCompass: '='
        },
        templateUrl: 'partials/directives/nveCompass.html'
    };
});