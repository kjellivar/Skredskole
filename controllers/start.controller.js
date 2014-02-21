myapp.controller("startCtrl", function($rootScope, $state){
  
  $rootScope.hidePageControls = function() {
    if($state.current.name === 'start') {
      return true;
    } else {
      return false;
    }
  };
    
  
});