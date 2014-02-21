myapp.controller("infoVaerCtrl", function($scope, $rootScope){
  
  
  if($rootScope.info.vaer === undefined){

    
  }
  
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
  
  $rootScope.forrige = "info/skredvarsel";
  $rootScope.neste = "info/alpine-farer";
  
});