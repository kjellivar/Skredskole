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
            customAlerts: "&",
            forrige: '=',
            neste: '='
        },
        templateUrl: 'partials/directives/nveSkredFooter.html',
        controller: function($scope, CurrentPageObject, sjekkFasit, korrekteSvar, filterFilter) {
            $scope.containerObject = CurrentPageObject();

            var showFasit = false,
                visFasitTekst = "Vis fasit",
                skjulFasitTekst = "Skjul fasit";
            $scope.fasitKnappTekst = visFasitTekst;
            var oldAnswers = {};

            $scope.$watchCollection('containerObject.svar', function(newAnswer) {
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

            $scope.toggleFasit = function () {
                if(!showFasit){
                    angular.copy($scope.containerObject.svar, oldAnswers);
                    angular.copy($scope.containerObject.fasit, $scope.containerObject.svar);
                    $scope.fasitKnappTekst = skjulFasitTekst;
                } else {
                    angular.copy( oldAnswers, $scope.containerObject.svar);
                    $scope.fasitKnappTekst = visFasitTekst;
                }
                showFasit = !showFasit;
            };

            $scope.emptyAnswers = function () {
                $scope.containerObject.svar = {};
                showFasit = false;
                $scope.fasitKnappTekst = visFasitTekst;
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
        link: function(scope){
            if(!scope.nveCompass.keys) {
                scope.nveCompass.keys = ['n','no','o','so','s','sv','v','nv'];
            }
            scope.model = scope.nveCompass.model;
            scope.keys = scope.nveCompass.keys;
        },
        templateUrl: 'partials/directives/nveCompass.html'
    };
});