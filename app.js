var myapp = angular.module('myapp', ["ui.router"]);


myapp.config(function($stateProvider, $urlRouterProvider){

  // For any unmatched url, send to /route1
  $urlRouterProvider.otherwise("/start");
  
  $stateProvider
    .state('start', {
        url: "/start",
        templateUrl: "partials/views/start.html",
        controller: "startCtrl"
    })
    .state('info', {
        url: "/forberedelse",
        templateUrl: "partials/views/info/info.meny.html",
        controller: function($scope, Info){
            $scope.info = Info;
        }
    })
      .state('info.info', {
          url: "/info",
          templateUrl: "partials/views/info/info.html",
          controller: "infoInfoCtrl"
      })
      .state('info.skredvarsel', {
          url: "/info",
          templateUrl: "partials/views/info/skredvarsel.html",
          controller: "infoSkredvarselCtrl"
      })
      .state('info.vaer', {
          url: "/vaer",
          templateUrl: "partials/views/info/vaer.html",
          controller: "infoVaerCtrl"
      })
      .state('info.alpineFarer', {
          url: "/alpine-farer",
          templateUrl: "partials/views/info/alpine.farer.html",
          controller: "infoAlpineFarerCtrl"
      })
      
    .state('utstyr', {
        url: "/turgruppe",
        templateUrl: "partials/views/utstyr/utstyr.meny.html",
        controller: function($scope, Utstyr){
          $scope.utstyr = Utstyr;
        }
    })
      .state('utstyr.list', {
          url: "/list",
          templateUrl: "partials/views/utstyr/list.html",
          controller: "utstyrListCtrl"
      })
      .state('utstyr.deltakere', {
          url: "/deltakere",
          templateUrl: "partials/views/utstyr/deltakere.html",
          controller: "utstyrDeltakereCtrl"
      })
    
    .state('rute', {
        url: "/rute",
        templateUrl: "partials/views/rute/rute.meny.html",
        controller: function($scope, Rute){
          $scope.rute = Rute;
        }
    })
      .state('rute.rutevalg', {
          url: "/rutevalg",
          templateUrl: "partials/views/rute/rutevalg.html",
          controller: "ruteRutevalgCtrl"
      })
      .state('rute.distanse', {
          url: "/distanse",
          templateUrl: "partials/views/rute/distanse.html",
          controller: "ruteDistanseCtrl"
      })
      .state('rute.tidsplan', {
          url: "/tidsplan",
          templateUrl: "partials/views/rute/tidsplan.html",
          controller: "ruteTidsplanCtrl"
      })
      
    
    .state('kritiskeOmrader', {
        url: "/kritiske-omrader",
        templateUrl: "partials/views/kritiske-omrader/kritiske.omrader.meny.html",
        controller: function($scope, KritiskeOmrader){
          $scope.kritiskeOmrader = KritiskeOmrader;
        }
    })
      .state('kritiskeOmrader.egenskaper', {
        url: "/detaljer",
        templateUrl: "partials/views/kritiske-omrader/egenskaper.html",
        controller: "kritiskeOmraderEgenskaperCtrl"
    })
      .state('kritiskeOmrader.nedkjoring', {
          url: "/nedkjoring",
          templateUrl: "partials/views/kritiske-omrader/nedkjoring.html",
          controller: "kritiskeOmraderNedkjoringCtrl"
      })
    
    .state('planleggingsskjema', {
        url: "/planleggingsskjema",
        templateUrl: "partials/views/planleggingsskjema.html",
       controller: "planleggingsskjemaCtrl"
    });
      
  
  
});