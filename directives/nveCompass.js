skredskoleAngularApp.directive('nveCompass', function(BASE_URL) {
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
        templateUrl: BASE_URL + 'partials/directives/nveCompass.html'
    };
});