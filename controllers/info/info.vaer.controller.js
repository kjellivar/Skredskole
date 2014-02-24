myapp.controller("infoVaerCtrl", function($scope, $rootScope){

    $scope.nedborLabels =
      [{title: "Ingen nedbør", key: "ingenNedbor"},
      {title: "Snø", key: "sno"},
      {title: "Regn", key: "regn"}];
    $scope.siktLabels =
      [{title: "God", key: "godSikt"},
      {title: "Begrenset", key: "begrensetSikt"},
      {title: "Dårlig", key: "darligSikt"}];
    $scope.vindLabels =
      [{title: "Svak", key: "svakVind"},
      {title: "Lett til frisk bris", key: "lettTilFriskBris"},
      {title: "Kuling, storm", key: "kulingStorm"}];

    $scope.$watchCollection('info.vaer.svar', function(newAnswers, oldAnswers) {
        $scope.sjekkFasit(newAnswers, $scope.info.vaer);
    });

    $rootScope.forrige = "info/skredvarsel";
    $rootScope.neste = "info/alpine-farer";
  
});