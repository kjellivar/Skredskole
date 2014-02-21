var myapp = angular.module('myapp', ["ui.router"]);

myapp.run(function($rootScope) {
  
  var MenuItem = function(navn, link, fasit){
    return {
      item: {cleared: false, link: link, navn: navn},
      svar: {},
      fasit: fasit
    }
  };

  // Opprettelse av container-objects for hver modul. Svar blir lagret på hvert objekt 
  $rootScope.info = {
    cleared: false,
    skredvarsel: new MenuItem("Skredvarsel", ".skredvarsel", {
      faregrad: 2, 
      hoydeniva: 700,
      nySno: true, vindtransportertSno: true,
      n: true, no: true, o: true, so: true, v: true, nv: true
    }),
    vaer: new MenuItem("Vær", ".vaer", {}),
    alpineFarer: new MenuItem("Alpine farer", ".alpine-farer", {})
  };
  
  $rootScope.utstyr = {cleared: false};
  
  $rootScope.rute = {
    cleared:false,
    tidsplan: new MenuItem("Tidsplan", ".tidsplan", {oppstigning: 3, nedfart: 1, pause: 0.5})
  };
  
  $rootScope.kritiskeOmrader = {cleared: false};
  
  //Tur-spesifikk info
  $rootScope.turTittel = 'Kyrkjebønosi';
  $rootScope.hoydeMeter = '931';
  $rootScope.infoVarslingsOmrade = 'Kyrkjebønosi ligger i varslingsregion Hemsedalsfjella.';
  $rootScope.skredvarselDato = '18.02.2014';
  $rootScope.skredvarselLink = 'http://varsom.no/Snoskred/Hemsedalsfjella/?date=18.02.2014';
  $rootScope.vaerLink = 'http://www.yr.no/sted/Norge/Buskerud/Hemsedal/Hemsedal~515335/';
  $rootScope.ruteTekst = 'Start ved grustaket ved Kyrkjebøen. Følg sommerstien nordøstover gjennom skogen i overkant av bratt område ned mot bekken. Når det blir brattere dreier en oppover mot nord -nordvest. På cirka 1120moh kommer man ut av skogen og møter et bratt heng hvor selvutløste skred er observert. Dette henget ligger i le for vestavinden som er rådende i området. Henget leder opp til en rygg som er naturlig å følge videre oppover. Ryggen er preget av fremstikkende steiner og renneformasjoner som kan samle snø. Etter hvert vil helningen avta og man kan følge ryggen nordover til toppen. Det finnes flere alternative nedfarter, hvor alle går i bratt terreng (> 30°), og flere inneholder terrengfeller som bekkedaler og skog.';
  

  
});

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
        url: "/info",
        templateUrl: "partials/views/info/info.html"
    })
      .state('info.skredvarsel', {
          url: "/skredvarsel",
          templateUrl: "partials/views/info/info.skredvarsel.html",
          controller: "infoSkredvarselCtrl"
      })
      .state('info.vaer', {
          url: "/vaer",
          templateUrl: "partials/views/info/info.vaer.html",
          controller: "infoVaerCtrl"
      })
      .state('info.alpine-farer', {
          url: "/alpine-farer",
          templateUrl: "partials/views/info/info.alpine.farer.html",
          controller: "infoAlpineFarerCtrl"
      })
      
    .state('utstyr', {
        url: "/utstyr",
        templateUrl: "partials/views/utstyr/utstyr.html"
    })
      .state('utstyr.list', {
          url: "/list",
          templateUrl: "partials/views/utstyr/utstyr.list.html",
          controller: "utstyrListCtrl"
      })
      .state('utstyr.deltakere', {
          url: "/deltakere",
          templateUrl: "partials/views/utstyr/utstyr.deltakere.html",
          controller: "utstyrDeltakereCtrl"
      })
    
    .state('rute', {
        url: "/rute",
        templateUrl: "partials/views/rute/rute.html"
    })
      .state('rute.rutevalg', {
          url: "/rutevalg",
          templateUrl: "partials/views/rute/rute.rutevalg.html",
          controller: "ruteRutevalgCtrl"
      })
      .state('rute.distanse', {
          url: "/distanse",
          templateUrl: "partials/views/rute/rute.distanse.html",
          controller: "ruteDistanseCtrl"
      })
      .state('rute.tidsplan', {
          url: "/tidsplan",
          templateUrl: "partials/views/rute/rute.tidsplan.html",
          controller: "ruteTidsplanCtrl"
      })
      
    
    .state('kritiske-omrader', {
        url: "/kritiske-omrader",
        templateUrl: "partials/views/kritiske-omrader/kritiske.omrader.html"
    })
      .state('kritiske-omrader.egenskaper', {
        url: "/egenskaper",
        templateUrl: "partials/views/kritiske-omrader/kritiske.omrader.egenskaper.html",
        controller: "kritiskeOmraderEgenskaperCtrl"
    })
    
    .state('planleggingsskjema', {
        url: "/planleggingsskjema",
        templateUrl: "partials/views/planleggingsskjema.html"
    });
      
  
  
});