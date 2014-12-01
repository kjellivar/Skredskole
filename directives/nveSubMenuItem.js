skredskoleAngularApp.directive('nveSubMenuItem', function(BASE_URL) {
  return {
    templateUrl: BASE_URL + 'partials/directives/nveSubMenuItem.html',
    transclude: true,
    scope: {
      nveSubMenuItem: '='
    }
  };
});


