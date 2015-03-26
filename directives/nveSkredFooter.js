skredskoleAngularApp.directive('nveSkredFooter', function(BASE_URL) {
    return {
        restrict: "AE",
        scope: {
            alerts: "=",
            customAlerts: "&",
            forrige: '=',
            neste: '='
        },
        templateUrl: BASE_URL + 'partials/directives/nveSkredFooter.html',
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

            $scope.$on('$stateChangeStart',
                function(event, toState, toParams, fromState, fromParams){
                    if(showFasit){
                        $scope.toggleFasit();
                        $scope.$apply();
                    }
                });
        }
    };
});