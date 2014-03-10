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
        templateUrl: 'partials/directives/nveSkredFooter.html'
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
});