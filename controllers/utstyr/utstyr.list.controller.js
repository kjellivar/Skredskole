
myapp.controller("utstyrListCtrl", function($scope, $rootScope){
  

  
  if($rootScope.utstyr.liste === undefined){
    $scope.utstyr.liste = {};

    $scope.utstyr.liste.alleTurDeltakere = 
      [{title: "Skredsøker"}, 
      {title: "Spade"},
      {title: "Søkestang"}];
      
    $scope.utstyr.liste.tilleggsUtstyr = 
      [{title: "Ballongsekk, avalung, skredball"}];
    
    $scope.utstyr.liste.annet = 
      [{title: "Kart, kompass, høydemåler"}, 
      {title: "Mobiltelefon"},
      {title: "Førstehjelpssett"},
      {title: "Bivuakksekk"}];
  }
  $rootScope.forrige = "info/alpine-farer";
  $rootScope.neste = "utstyr/deltakere";
  
});