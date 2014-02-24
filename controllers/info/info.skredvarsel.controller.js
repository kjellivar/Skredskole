myapp.controller("infoSkredvarselCtrl", function($scope, $rootScope){


  
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

  
  $scope.$watchCollection('info.skredvarsel.svar', function(newAnswers) {
    $scope.sjekkFasit(newAnswers, $scope.info.skredvarsel);
  });
  
  $rootScope.forrige = false;
  $rootScope.neste = "info/vaer";
  


});