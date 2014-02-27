myapp.controller("infoSkredvarselCtrl", function($scope, $rootScope, $timeout){


  
    $scope.himmelRetningerLabels =
      [{title: "N", key: "n"}, {title: "NØ", key: "no"}, {title: "Ø", key: "o"}, {title: "SØ", key: "so"},
      {title: "S", key: "s"}, {title: "SV", key: "sv"}, {title: "V", key: "v"}, {title: "NV", key: "nv"}];

    $scope.snoDekkeLabels =
      [{title: "Nysnø", key: "nySno"},
      {title: "Vindtransportert snø", key: "vindtransportertSno"},
      {title: "Svake lag i snøpakken", key: "svakeLagISnopakken"},
      {title: "Våt og vannmettet snø", key: "vatOgVannmettetSno"}];

    $scope.utsatteOmraderLabels =
      [{title: "Middels bratte heng (<30°)", key: "middelsBratteHeng"},
      {title: "Bratte heng (>30°)", key: "bratteHeng"},
      {title: "Veldig bratte heng (>35°)", key: "veldigBratteHeng"},
      {title: "Ekstremt bratte heng (>40°)", key: "ekstremtBratteHeng"},
      {title: "Områder nær rygger", key: "omraderNaerRygger"},
      {title: "Terrengfeller", key: "terrengFeller"},
      {title: "Overgang fra lite til mye snø", key: "overgangFraLiteTilMyeSno"}];

    $scope.faregrader = [{grad: 1, class: 'btn-primary'},
                    {grad: 2, class: 'btn-primary'},
                    {grad: 3, class: 'btn-primary'},
                    {grad: 4, class: 'btn-primary'},
                    {grad: 5, class: 'btn-primary'}];


    $scope.visAntallKorrekteSvar =  function(newAnswers) {
        $scope.info.skredvarsel.progressbarStyle.width = '0%';
        $timeout(function(){$scope.sjekkFasit(newAnswers, $scope.info.skredvarsel)}, 500);
        $scope.himmelRetningerBesvart = newAnswers.n || newAnswers.no || newAnswers.o || newAnswers.so || newAnswers.s || newAnswers.sv || newAnswers.v || newAnswers.nv;
        $scope.snodekkeBesvart = newAnswers.nySno || newAnswers.vindtransportertSno || newAnswers.svakeLagISnopakken || newAnswers.vatOgVannmettetSno;
        $scope.utsatteOmraderBesvart = newAnswers.middelsBratteHeng || newAnswers.bratteHeng || newAnswers.veldigBratteHeng || newAnswers.ekstremtBratteHeng || newAnswers.omraderNaerRygger || newAnswers.terrengFeller || newAnswers.overgangFraLiteTilMyeSno;
        $scope.hoydenivaBesvart = newAnswers.hoydeniva && true;
        $scope.faregradBesvart = newAnswers.faregrad && true;
        $scope.visAlert = !($scope.himmelRetningerBesvart && $scope.snodekkeBesvart && $scope.utsatteOmraderBesvart && $scope.hoydenivaBesvart && $scope.faregradBesvart);
        angular.element("#alertPane").slideToggle();
    };

    /*$scope.$watchCollection('info.skredvarsel.svar', function(newAnswers) {
        angular.element("#alertPane").slideUp();
        $scope.sjekkFasit(newAnswers, $scope.info.skredvarsel);
    });*/

    $rootScope.forrige = false;
    $rootScope.neste = "info/vaer";



});