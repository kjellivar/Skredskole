skredskoleAngularApp.directive('nveCheckboxButton', function(BASE_URL) {
    return {
        scope: {
            nveCheckboxButton: '='
        },
        transclude: true,
        templateUrl: BASE_URL + 'partials/directives/nveCheckboxButton.html'
    };
});