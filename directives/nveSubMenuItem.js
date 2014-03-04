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
});