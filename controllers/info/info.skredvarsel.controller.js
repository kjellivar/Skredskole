myapp.controller("infoSkredvarselCtrl", function($scope, $rootScope){

  if($scope.info.skredvarsel.antallFasitSvar === undefined){
    $scope.info.skredvarsel.antallFasitSvar = 0.0;
    angular.forEach($scope.info.skredvarsel.fasit, function () {
      $scope.info.skredvarsel.antallFasitSvar = $rootScope.info.skredvarsel.antallFasitSvar + 1;
    });

  }
  
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
  
  
  $scope.progressbarStyle = {width: '0%'}
  $scope.barClass = "";
  
  var sjekkFasit = function(answerObject) {
    var totaltRiktigeSvar = $scope.info.skredvarsel.antallFasitSvar;
    var antallRiktigeSvar = 0.0;
    $scope.barClass = "";
    
    if(angular.isObject(answerObject)){
      angular.forEach(answerObject, function(val, key){
        if(val == $scope.info.skredvarsel.fasit[key]){
          antallRiktigeSvar = antallRiktigeSvar + 1;
        } else if(val !== false) {
          antallRiktigeSvar = antallRiktigeSvar > 0 ? antallRiktigeSvar - 1 : 0;
          $scope.barClass = "bar-warning";
        }
      });
    }
    
    var width = (antallRiktigeSvar / totaltRiktigeSvar) * 100;
    $scope.progressbarStyle.width = width + '%';
    
    if(antallRiktigeSvar === totaltRiktigeSvar){
      $scope.barClass = "bar-success";
      if($scope.info.skredvarsel.item.cleared !== true){
        $scope.info.skredvarsel.item.cleared = true;
      }
    } else {
      if($scope.info.skredvarsel.item.cleared !== false){
        $scope.info.skredvarsel.item.cleared = false;
      }
    }
    
  }
  
  $scope.$watchCollection('info.skredvarsel.svar', function(newAnswers, oldAnswers) {
    sjekkFasit(newAnswers);
  });
  
  $rootScope.forrige = false;
  $rootScope.neste = "info/vaer";
  


});