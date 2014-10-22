//prod
//myapp.constant('BASE_URL', '/Templates/Pages/Skredskole/');

//test
myapp.constant('BASE_URL', '');

myapp.factory('MenuItem', function () {
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

myapp.factory('runProgressbarAnimation', ['$timeout', 'CurrentPageObject', function($timeout, CurrentPageObject) {
    return function(){
        var endWidth = CurrentPageObject().progressbarStyle.width;
        CurrentPageObject().progressbarStyle.width = '0%';
        $timeout(function(){CurrentPageObject().progressbarStyle.width = endWidth;}, 500);
    };
}]);

myapp.factory('korrekteSvar', ['runProgressbarAnimation', 'AlertObject', 'sjekkFasit', function(runProgressbarAnimation, AlertObject, sjekkFasit) {
    return function(alerts) {
        sjekkFasit();
        runProgressbarAnimation();
        AlertObject(alerts);
    };
}]);



myapp.factory('sjekkFasit', function(CurrentPageObject) {
    return function () {
        var pageObject = CurrentPageObject();
        var newAnswers = pageObject.svar;
        if (pageObject.antallFasitSvar === undefined) {
            pageObject.antallFasitSvar = 0.0;
            angular.forEach(pageObject.fasit, function (val) {
               // if(val !== undefined){
                    pageObject.antallFasitSvar = pageObject.antallFasitSvar + 1;
                //}
            });
        }

        var totaltRiktigeSvar = pageObject.antallFasitSvar;
        var antallRiktigeSvar = 0.0;
        pageObject.barClass = "";

        if(angular.isObject(newAnswers)){
            angular.forEach(newAnswers, function(val, key){
                if (val == pageObject.fasit[key] || (pageObject.fasit[key] === "required" && val)) {
                    antallRiktigeSvar = antallRiktigeSvar + 1;
                } else if(val !== false) {
                    antallRiktigeSvar = antallRiktigeSvar > 0 ? antallRiktigeSvar - 1 : 0;
                    pageObject.barClass = "bar-warning";
                }
            });
        }

        pageObject.antallRiktigeSvar = antallRiktigeSvar;

        var width = (antallRiktigeSvar / totaltRiktigeSvar) * 100;
        pageObject.progressbarStyle.width = width + '%';

        if(antallRiktigeSvar === totaltRiktigeSvar){
            pageObject.barClass = "bar-success";
            if (pageObject.item.cleared !== true) {
                pageObject.item.cleared = true;
            }
        } else {
            if (pageObject.item.cleared !== false) {
                pageObject.item.cleared = false;
            }
        }

    };
});

myapp.factory('AlertObject', function(CurrentPageObject) {
    return function (dataIn){
        var newAnswers = CurrentPageObject().svar,
            fasit = CurrentPageObject().fasit;

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
        CurrentPageObject().alerts = alerts;
        return alerts;
    };
});

myapp.factory('Cleared', function(Info, Utstyr, Rute, KritiskeOmrader, Nedkjoring) {
    var infoCleared = function () {
        return (Info.skredvarsel.item.cleared && Info.vaer.item.cleared && Info.alpineFarer.item.cleared);
    };
    var utstyrCleared = function () {
        return (Utstyr.list.item.cleared && Utstyr.deltakere.item.cleared);
    };
    var ruteCleared = function () {
        return (Rute.rutevalg.item.cleared && Rute.distanse.item.cleared && Rute.tidsplan.item.cleared);
    };
    var kritiskeOmraderCleared = function () {
        return (KritiskeOmrader.egenskaper.item.cleared);
    };

    var nedkjoringCleared = function () {
        return (Nedkjoring.nedkjoring.item.cleared);
    };
    return {
        info: infoCleared,
        utstyr: utstyrCleared,
        rute: ruteCleared,
        kritiskeOmrader: kritiskeOmraderCleared,
        nedkjoring: nedkjoringCleared

    };
});

myapp.factory('CurrentPageObject', function(Info, Utstyr, Rute, KritiskeOmrader, Nedkjoring,$state) {

        return function () {
            var states = $state.current.name.split(".");
            var pageVar = states.length > 1 ? states[1] : states[0];
            if(states[0] === "info"){
                return Info[pageVar];
            } else if(states[0] === "utstyr"){
                return Utstyr[pageVar];
            } else if(states[0] === "rute"){
                return Rute[pageVar];
            } else if(states[0] === "kritiskeOmrader"){
                return KritiskeOmrader[pageVar];
            } else if(states[0] === "nedkjoring"){
                return Nedkjoring[pageVar];
            }

        }
    });


myapp.provider('Info', function () {
    var fasit = {
        skredvarsel: {
            faregrad: undefined,
            skredproblem: undefined,
            tilleggsbelastning: undefined,
            skredstorrelse: undefined,  //1:små 2:middels 3:store 4:svært store
            sannsynlighet: undefined,  //1:lite sannsynlig 2:mulig 3:sannsynlig 4:svært sannsynlig

            leomrader: undefined,
            terrengfeller: undefined,
            overgangFraLiteTilMyeSno: undefined,

            nySno: undefined,
            vindtransportertSno: undefined,
            svakeLagISnopakken: undefined,
            vatOgVannmettetSno: undefined,

            n: undefined, no: undefined, o: undefined, so: undefined, s: undefined, sv: undefined, v: undefined, nv: undefined,
            hoydeniva: undefined
        },
        vaer: {
            ingenNedbor: undefined,
            sno: undefined,
            regn: undefined,

            svakVind: undefined,
            lettTilFriskBris: undefined,
            kulingStorm: undefined,

            godSikt: undefined,
            begrensetSikt: undefined,
            darligSikt: undefined,

            nullisoterm: undefined
        },
        alpineFarer: {
            fall: undefined,
            bresprekker: undefined,
            skalver: undefined,
            klipper: undefined,
            vindavkjoling: undefined
        }
    };

    this.$get = ["MenuItem", function (MenuItem) {
        return {
            info: MenuItem("Info", ".info", {}),
            skredvarsel: MenuItem("Skredvarsel", ".skredvarsel", fasit.skredvarsel),
            vaer: MenuItem("Vær", ".vaer", fasit.vaer),
            alpineFarer: MenuItem("Alpine farer", ".alpineFarer", fasit.alpineFarer),
            labels: {
                skredproblem:{
                    torreLossnoskred: "Tørre løssnøskred",
                    vateLossnoskred: "Våte løssnøskred",
                    torreFlakskred: "Tørre flakskred",
                    vateFlakskred: "Våte flakskred"
                },
                snodekke: {
                    nySno:"Nysnø",
                    vindtransportertSno:"Vindtransportert snø",
                    svakeLagISnopakken:"Svake lag i snøpakken",
                    vatOgVannmettetSno:"Våt og vannmettet snø"
                },
                utsatt: {
                    leomrader: "Leområder",
                    terrengfeller: "Terrengfeller",
                    overgangFraLiteTilMyeSno: "Overgang fra lite til mye snø"
                },
                tilleggsbelastning : {
                    naturlig: "Naturlig utløst",
                    liten: "Liten",
                    stor: "Stor"
                },
                skredstorrelse : {
                    "4": "Svært store",
                    "3": "Store",
                    "2": "Middels",
                    "1": "Små"
                },
                sannsynlighet : {
                    "4": "Meget sannsynlig",
                    "3": "Sannsynlig",
                    "2": "Mulig",
                    "1": "Lite sannsynlig"
                }
            }
        };
    }];
    this.setFasit = function (newFasit) {
        fasit = newFasit;
    }
});
myapp.provider('Utstyr', function () {
    var fasit = {
        list: {
            skredsoker: true,
            spade: true,
            sokestang: true,
            //ballongsekkAvalungSkredball: true,
            kartKompass: true,
            mobiltelefon: true,
            forstehjelpssett: true
            //bivuakksekk: true
        },
        deltakere: {
            gruppeStorrelse: "required",
            erfaring: "required",
            motivasjon: "required"
        }

    };
    this.$get = ["MenuItem", function (MenuItem) {
        return {
            list: MenuItem("Utstyr", ".list", fasit.list),
            deltakere: MenuItem("Deltakere", ".deltakere", fasit.deltakere)
        };
    }];
    this.setFasit = function (newFasit) {
        fasit = newFasit;
    }
});
myapp.provider('Rute', function () {
    var fasit = {
        tidsplan: {
            oppstigning: undefined,
            nedfart: undefined,
            spesifikkStart: undefined
        },
        rutevalg: {rutevalg: undefined},
        distanse: {lengde: undefined, hoyde: undefined}
    };
    this.$get = ["MenuItem", function (MenuItem) {
        return {
            tidsplan: MenuItem("Tidsplan", ".tidsplan", fasit.tidsplan),
            rutevalg: MenuItem("Rutevalg", ".rutevalg", fasit.rutevalg),
            distanse: MenuItem("Distanse", ".distanse", fasit.distanse)
        };
    }];
    this.setFasit = function (newFasit) {
        fasit = newFasit;
    }
});

myapp.provider('KritiskeOmrader', function () {
    var fasit = {
        egenskaper: {}
    };
    this.$get = ["MenuItem", function (MenuItem) {
        return {
            egenskaper: MenuItem("Detaljer", ".egenskaper", fasit.egenskaper)
        };
    }];
    this.setFasit = function (newFasit) {
        fasit = newFasit;
    }
});

myapp.provider('Nedkjoring', function () {
    var fasit = {
        nedkjoring: {
            sammeRute: undefined,
            spesifikkStart: undefined
        }
    };
    this.$get = ["MenuItem", function (MenuItem) {
        return {
            nedkjoring: MenuItem("Nedkjøring", ".nedkjoring", fasit.nedkjoring)
        };
    }];
    this.setFasit = function (newFasit) {
        fasit = newFasit;
    }
});

myapp.provider('AppData', function () {
    var turTittel = "turTittel";
    var hoydeMeter = 'Høydemeter';
    var infoVarslingsOmrade = ['paragraf1', 'paragraf2'];
    var skredvarselDato = 'dato';
    var skredvarselLink = 'url';
    var ruteTekst = 'tekst';
    var bilder = {
        kart: "",
        kartMedLosning: "",
        kartMedKritiskeOmrader: "",
        kartKritiskOmrade1Zoom: "",
        kartKritiskOmrade2Zoom: ""
    };

    this.$get = function () {
        return {
            turTittel: turTittel,
            hoydeMeter: hoydeMeter,
            infoVarslingsOmrade: infoVarslingsOmrade,
            skredvarselLink: skredvarselLink,
            skredvarselDato: skredvarselDato,
            ruteTekst: ruteTekst,
            bilder: bilder
        };
    };
    this.setTurTittel = function (tittel) {
        turTittel = tittel;
    };
    this.setHoydeMeter = function (hoyde) {
        hoydeMeter = hoyde;
    };
    this.setInfoVarslingsOmrade = function (omrade) {
        infoVarslingsOmrade = omrade;
    };
    this.setSkredvarselDato = function (dato) {
        skredvarselDato = dato;
    };
    this.setSkredvarselLink = function (link) {
        skredvarselLink = link;
    };
    this.setRuteTekst = function (tekst) {
        ruteTekst = tekst;
    };
    this.setBilder = function (bildeObj){
        bilder = bildeObj;
    };

});