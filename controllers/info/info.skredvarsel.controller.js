myapp.controller("infoSkredvarselCtrl", function($scope, $rootScope, $timeout){

    $scope.containerObject = $scope.info.skredvarsel;
  
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


    $scope.visAntallKorrekteSvar =  function() {

        var newAnswers = $scope.containerObject.svar;
        $scope.runProgressbarAnimation($scope.containerObject);

        $scope.alerts = [{
            show: !(newAnswers.n || newAnswers.no || newAnswers.o || newAnswers.so || newAnswers.s || newAnswers.sv || newAnswers.v || newAnswers.nv),
            text: "Hva er mest utsatt himmelretning?"
        },{
            show: !(newAnswers.nySno || newAnswers.vindtransportertSno || newAnswers.svakeLagISnopakken || newAnswers.vatOgVannmettetSno),
            text: "Hvordan er snødekket?"
        },{
            show: !(newAnswers.middelsBratteHeng || newAnswers.bratteHeng || newAnswers.veldigBratteHeng || newAnswers.ekstremtBratteHeng || newAnswers.omraderNaerRygger || newAnswers.terrengFeller || newAnswers.overgangFraLiteTilMyeSno),
            text: "Hva er mest utsatte områder?"
        },{
            show: !newAnswers.hoydeniva,
            text: "Hva er mest utsatt høydenivå?"
        },{
            show: !newAnswers.faregrad,
            text: "Hva er varslet faregrad?"
        }];


    };

    $scope.$watchCollection('info.skredvarsel.svar', function() {
        $scope.sjekkFasit($scope.containerObject);
    });

    $scope.forrige = false;
    $scope.neste = "info/vaer";



});