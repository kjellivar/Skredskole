myapp.controller("kritiskeOmraderEgenskaperCtrl", function($scope, AppData){



    $scope.himmelRetningerLabels =
      [{title: "N", key: "n"}, {title: "NØ", key: "no"}, {title: "Ø", key: "o"}, {title: "SØ", key: "so"},
      {title: "S", key: "s"}, {title: "SV", key: "sv"}, {title: "V", key: "v"}, {title: "NV", key: "nv"}];
    $scope.utsatteOmraderLabels =
      [{title: "Bratte heng (over 30°)", key: "bratteHeng"},
      {title: "Leområder, leheng", key: "leomrader"},
      {title: "Renner, depresjoner" , key: "renner"},
      {title: "Områder med mye steiner/blokker" , key: "omraderMedMyeSteiner"}];



    $scope.showPoints = false;
    $scope.togglePoints = function () {
        $scope.showPoints = !$scope.showPoints;
    };

    $scope.forrige = "rute.tidsplan";
    $scope.neste = "kritiskeOmrader.nedkjoring";

    $scope.turTittel = AppData.turTittel;
  

});