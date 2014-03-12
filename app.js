var myapp = angular.module('myapp', ["ui.router"]);

myapp.factory('MenuItem', function() {
    return function(navn, link, fasit){
        return {
            item: {cleared: false, link: link, navn: navn},
            svar: {},
            fasit: fasit,
            progressbarStyle: {width: '0%'},
            barClass: ""
        }
    };
});

myapp.factory('runProgressbarAnimation', ['$timeout', function($timeout) {
    return function(containerObject){
        var endWidth = containerObject.progressbarStyle.width;
        containerObject.progressbarStyle.width = '0%';
        $timeout(function(){containerObject.progressbarStyle.width = endWidth;}, 500);
    };
}]);

myapp.factory('sjekkFasit', function() {
    return function(containerObject) {
        var newAnswers = containerObject.svar;
        if(containerObject.antallFasitSvar === undefined){
            containerObject.antallFasitSvar = 0.0;
            angular.forEach(containerObject.fasit, function (val) {
                if(val !== undefined){
                    containerObject.antallFasitSvar = containerObject.antallFasitSvar + 1;
                }
            });
        }

        var totaltRiktigeSvar = containerObject.antallFasitSvar;
        var antallRiktigeSvar = 0.0;
        containerObject.barClass = "";

        if(angular.isObject(newAnswers)){
            angular.forEach(newAnswers, function(val, key){
                if(val == containerObject.fasit[key] || (containerObject.fasit[key] === "required" && val)){
                    antallRiktigeSvar = antallRiktigeSvar + 1;
                } else if(val !== false) {
                    antallRiktigeSvar = antallRiktigeSvar > 0 ? antallRiktigeSvar - 1 : 0;
                    containerObject.barClass = "bar-warning";
                }
            });
        }

        containerObject.antallRiktigeSvar = antallRiktigeSvar;

        var width = (antallRiktigeSvar / totaltRiktigeSvar) * 100;
        containerObject.progressbarStyle.width = width + '%';

        if(antallRiktigeSvar === totaltRiktigeSvar){
            containerObject.barClass = "bar-success";
            if(containerObject.item.cleared !== true){
                containerObject.item.cleared = true;
            }
        } else {
            if(containerObject.item.cleared !== false){
                containerObject.item.cleared = false;
            }
        }

    };
});

myapp.factory('AlertObject', function() {
    return function (dataIn, containerObject){
        var newAnswers = containerObject.svar,
            fasit = containerObject.fasit;

        var alerts = [];

        angular.forEach(dataIn, function(keys, text){
            var show = false;
            var i = 0;
            for(i = 0; i < keys.length; i = i + 1){
                var brukerSvar = newAnswers[keys[i]],
                    fasitSvar = fasit[keys[i]];
                //Vis alert dersom svar er ulikt fasit OG det ikke er svart false der fasit sier undefined OG man ikke har svart på et required felt
                if(brukerSvar != fasitSvar && !(brukerSvar === false && fasitSvar === undefined) && !(brukerSvar && fasitSvar === "required")){
                    show = true;
                    break;
                }
            }
            alerts.push({
                text: text,
                show: show
            });
        });
        return alerts;
    };
});

/*myapp.factory('Info', ['MenuItem', function(MenuItem) {
    return {
        skredvarsel: MenuItem("Skredvarsel", ".skredvarsel", {
            faregrad: 2,
            skredstorrelse: 3,  //2:små 3:middels 4:store 5:svært store
            sannsynlighet: 3,  //2:lite sannsynlig 3:mulig 4:sannsynlig 5:svært sannsynlig
            tilleggsbelastning: 'liten',
            bratteHeng: undefined,
            omraderNaerRygger: true,
            terrengFeller: undefined,
            overgangFraLiteTilMyeSno: undefined,
            nySno: true,
            vindtransportertSno: true,
            svakeLagISnopakken: undefined,
            vatOgVannmettetSno: undefined,
            n: true, no: true, o: true, so: true, s: undefined, sv: undefined, v: true, nv: true,
            hoydeniva: 700
        }),
        vaer: MenuItem("Vær", ".vaer", {
            ingenNedbor: undefined,
            sno: true,
            regn: undefined,
            svakVind: true,
            lettTilFriskBris: true,
            kulingStorm: true,
            godSikt: true,
            begrensetSikt: true,
            darligSikt: true,
            temperatur: 20,
            nullisoterm: 20
        }),
        alpineFarer: MenuItem("Alpine farer", ".alpine-farer", {
            fall: true,
            bresprekker: true,
            skalver: true,
            klipper: true,
            vindavkjoling: true
        })
    };
}]);

myapp.factory('Utstyr', ['MenuItem', function(MenuItem) {
    return {
        list: MenuItem("Utstyr", ".list", {
            skredsoker: true,
            spade: true,
            sokestang: true,
            //ballongsekkAvalungSkredball: true,
            kartKompassHoydemaler: true,
            mobiltelefon: true,
            forstehjelpssett: true
            //bivuakksekk: true
        }),
        deltakere: MenuItem("Deltakere", ".deltakere", {

        })
    };
}]);

myapp.factory('Rute', ['MenuItem', function(MenuItem) {
    return {
        tidsplan: MenuItem("Tidsplan", ".tidsplan", {
            oppstigning: 3,
            nedfart: 1,
            pause: 0.5,
            spesifikkStart: "required",
            startTid: "required"
        }),
        rutevalg: MenuItem("Rutevalg", ".rutevalg", {rutevalg: true}),
        distanse: MenuItem("Distanse", ".distanse", {lengde: "required", hoyde: 931})
    };
}]);

myapp.factory('KritiskeOmrader', ['MenuItem', function(MenuItem) {
    return {
        egenskaper: MenuItem("Egenskaper", ".egenskaper", {}),
        sjekk: MenuItem("Sjekk", ".sjekk", {}),
        nedkjoring: MenuItem("Nedkjøring", ".nedkjoring", {})
    };
}]);*/

myapp.run(function($rootScope, $timeout, MenuItem) {


    // Opprettelse av container-objects for hver modul. Svar blir lagret på hvert objekt
    $rootScope.info = {
        skredvarsel: MenuItem("Skredvarsel", ".skredvarsel", {
            faregrad: 2,
            skredstorrelse: 3,  //2:små 3:middels 4:store 5:svært store
            sannsynlighet: 3,  //2:lite sannsynlig 3:mulig 4:sannsynlig 5:svært sannsynlig
            tilleggsbelastning: 'liten',
            bratteHeng: undefined,
            omraderNaerRygger: true,
            //terrengFeller: true,
            //overgangFraLiteTilMyeSno: true,
            nySno: true,
            vindtransportertSno: true,
            //svakeLagISnopakken: true,
            //vatOgVannmettetSno: true,
            n: true, no: true, o: true, so: true, /*s: true, sv: true,*/ v: true, nv: true,
            hoydeniva: 700
        }),
        vaer: MenuItem("Vær", ".vaer", {
            //ingenNedbor: true,
            sno: true,
            //regn: true,
            svakVind: true,
            lettTilFriskBris: true,
            kulingStorm: true,
            godSikt: true,
            begrensetSikt: true,
            darligSikt: true,
            temperatur: 20,
            nullisoterm: 20
        }),
        alpineFarer: MenuItem("Alpine farer", ".alpine-farer", {
            fall: true,
            bresprekker: true,
            skalver: true,
            klipper: true,
            vindavkjoling: true
        })
    };

    $rootScope.utstyr = {
        list: MenuItem("Utstyr", ".list", {
            skredsoker: true,
            spade: true,
            sokestang: true,
            //ballongsekkAvalungSkredball: true,
            kartKompassHoydemaler: true,
            mobiltelefon: true,
            forstehjelpssett: true
            //bivuakksekk: true
        }),
        deltakere: MenuItem("Deltakere", ".deltakere", {
            gruppeStorrelse: "required",
            erfaring: "required",
            motivasjon: "required"
        })
    };

    $rootScope.rute = {
        tidsplan: MenuItem("Tidsplan", ".tidsplan", {
            oppstigning: 3,
            nedfart: 1,
            pause: 0.5,
            spesifikkStart: "required",
            startTid: "required"
        }),
        rutevalg: MenuItem("Rutevalg", ".rutevalg", {rutevalg: true}),
        distanse: MenuItem("Distanse", ".distanse", {lengde: "required", hoyde: 931})
    };

    $rootScope.kritiskeOmrader = {
        egenskaper: MenuItem("Egenskaper", ".egenskaper", {}),
        sjekk: MenuItem("Sjekk", ".sjekk", {}),
        nedkjoring: MenuItem("Nedkjøring", ".nedkjoring", {sammeRute: "required"})
    };

    //Tur-spesifikk info
    $rootScope.turTittel = 'Kyrkjebønosi';
    $rootScope.hoydeMeter = '931';
    $rootScope.infoVarslingsOmrade = 'Kyrkjebønosi ligger i varslingsregion Hemsedalsfjella.';
    $rootScope.skredvarselDato = '18.02.2014';
    $rootScope.skredvarselLink = 'http://varsom.no/Snoskred/Hemsedalsfjella/?date=18.02.2014';
    $rootScope.vaerLink = 'http://www.yr.no/sted/Norge/Buskerud/Hemsedal/Hemsedal~515335/';
    $rootScope.ruteTekst = 'Start ved grustaket ved Kyrkjebøen. Følg sommerstien nordøstover gjennom skogen i overkant av bratt område ned mot bekken. Når det blir brattere dreier en oppover mot nord -nordvest. På cirka 1120moh kommer man ut av skogen og møter et bratt heng hvor selvutløste skred er observert. Dette henget ligger i le for vestavinden som er rådende i området. Henget leder opp til en rygg som er naturlig å følge videre oppover. Ryggen er preget av fremstikkende steiner og renneformasjoner som kan samle snø. Etter hvert vil helningen avta og man kan følge ryggen nordover til toppen. Det finnes flere alternative nedfarter, hvor alle går i bratt terreng (> 30°), og flere inneholder terrengfeller som bekkedaler og skog.';


    $rootScope.isInfoCleared = function () {
        return ($rootScope.info.skredvarsel.item.cleared && $rootScope.info.vaer.item.cleared && $rootScope.info.alpineFarer.item.cleared);
    };
    $rootScope.isUtstyrCleared = function () {
        return ($rootScope.utstyr.list.item.cleared && $rootScope.utstyr.deltakere.item.cleared);
    };
    $rootScope.isRuteCleared = function () {
        return ($rootScope.rute.rutevalg.item.cleared && $rootScope.rute.distanse.item.cleared && $rootScope.rute.tidsplan.item.cleared);
    };
    $rootScope.isKritiskeOmraderCleared = function () {
        return ($rootScope.kritiskeOmrader.egenskaper.item.cleared && $rootScope.kritiskeOmrader.sjekk.item.cleared && $rootScope.kritiskeOmrader.nedkjoring.item.cleared);
    };

  
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
      .state('kritiske-omrader.sjekk', {
          url: "/sjekk",
          templateUrl: "partials/views/kritiske-omrader/kritiske.omrader.sjekk.html",
          controller: "kritiskeOmraderSjekkCtrl"
      })
      .state('kritiske-omrader.nedkjoring', {
          url: "/nedkjoring",
          templateUrl: "partials/views/kritiske-omrader/kritiske.omrader.nedkjoring.html",
          controller: "kritiskeOmraderNedkjoringCtrl"
      })
    
    .state('planleggingsskjema', {
        url: "/planleggingsskjema",
        templateUrl: "partials/views/planleggingsskjema.html",
       controller: "planleggingsskjemaCtrl"
    });
      
  
  
});