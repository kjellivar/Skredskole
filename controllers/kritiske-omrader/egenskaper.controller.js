myapp.controller("kritiskeOmraderEgenskaperCtrl", function($scope, AppData){



    $scope.himmelRetningerLabels =
      [{title: "N", key: "n"}, {title: "NØ", key: "no"}, {title: "Ø", key: "o"}, {title: "SØ", key: "so"},
      {title: "S", key: "s"}, {title: "SV", key: "sv"}, {title: "V", key: "v"}, {title: "NV", key: "nv"}];
    $scope.utsatteOmraderLabels =
      [{title: "Bratt heng (over 30°)", key: "bratteHeng"},
      {title: "Mulig utløpsområde for snøskred", key: "leomrader"},
      {title: "Terrengfelle" , key: "renner"},
      {title: "Skavl" , key: "omraderMedMyeSteiner"}];


    $scope.showKritiskOmradeNr = -1;

    $scope.showPoints = false;
    $scope.togglePoints = function () {
        $scope.showPoints = !$scope.showPoints;
        $scope.showKritiskOmradeNr = -1;
    };

    $scope.showKritiskOmrade = function(nummer) {
        $scope.showKritiskOmradeNr = nummer;
    };

    $scope.forrige = "rute.tidsplan";
    $scope.neste = "nedkjoring.nedkjoring";

    $scope.turTittel = AppData.turTittel;
    $scope.bilder = AppData.bilder;



    $scope.alerts = {
        'Med snøskredforholdene gitt i varselet, er mest utsatt himmelretning og høydenivå sammenfallende med det kritiske punkt? Hvis ja er det stor grunn for at risikoen er høy for å passere det kritiske punktet': ['helning1', 'hoyde1', 'n1','no1','o1','so1','s1','sv1','v1','nv1','bratteHeng1','leomrader1','omraderMedMyeSteiner1','renner1','helning2', 'hoyde2', 'n2','no2','o2','so2','s2','sv2','v2','nv2','bratteHeng2','leomrader2','omraderMedMyeSteiner2','renner2']
    };

});