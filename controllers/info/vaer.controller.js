skredskoleAngularApp.controller("infoVaerCtrl", function($scope){





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

    var keys = {nedbor: [], sikt: [], vind: []};
    angular.forEach($scope.nedborLabels, function(val){
        keys.nedbor.push(val.key);
    });
    angular.forEach($scope.siktLabels, function(val){
        keys.sikt.push(val.key);
    });
    angular.forEach($scope.vindLabels, function(val){
        keys.vind.push(val.key);
    });

    $scope.alerts = {
        "Er det ventet nedbør? Hvis ja, hvilken?": keys.vind,
        "Hvordan er sikten?": keys.sikt,
        "Vil vinden være en faktor?": keys.vind,
        "Hva er nullgradsgrensen?": ['nullisoterm']
    };



    $scope.forrige = "info.skredvarsel";
    $scope.neste = "info.alpineFarer";


  
});