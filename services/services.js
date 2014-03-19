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
    return function() {
        var newAnswers = CurrentPageObject().svar;
        if(CurrentPageObject().antallFasitSvar === undefined){
            CurrentPageObject().antallFasitSvar = 0.0;
            angular.forEach(CurrentPageObject().fasit, function (val) {
                if(val !== undefined){
                    CurrentPageObject().antallFasitSvar = CurrentPageObject().antallFasitSvar + 1;
                }
            });
        }

        var totaltRiktigeSvar = CurrentPageObject().antallFasitSvar;
        var antallRiktigeSvar = 0.0;
        CurrentPageObject().barClass = "";

        if(angular.isObject(newAnswers)){
            angular.forEach(newAnswers, function(val, key){
                if(val == CurrentPageObject().fasit[key] || (CurrentPageObject().fasit[key] === "required" && val)){
                    antallRiktigeSvar = antallRiktigeSvar + 1;
                } else if(val !== false) {
                    antallRiktigeSvar = antallRiktigeSvar > 0 ? antallRiktigeSvar - 1 : 0;
                    CurrentPageObject().barClass = "bar-warning";
                }
            });
        }

        CurrentPageObject().antallRiktigeSvar = antallRiktigeSvar;

        var width = (antallRiktigeSvar / totaltRiktigeSvar) * 100;
        CurrentPageObject().progressbarStyle.width = width + '%';

        if(antallRiktigeSvar === totaltRiktigeSvar){
            CurrentPageObject().barClass = "bar-success";
            if(CurrentPageObject().item.cleared !== true){
                CurrentPageObject().item.cleared = true;
            }
        } else {
            if(CurrentPageObject().item.cleared !== false){
                CurrentPageObject().item.cleared = false;
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

myapp.factory('Cleared', ['Info', 'Utstyr', 'Rute', 'KritiskeOmrader', function(Info, Utstyr, Rute, KritiskeOmrader) {
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
        return (KritiskeOmrader.egenskaper.item.cleared && KritiskeOmrader.nedkjoring.item.cleared);
    };
    return {
        info: infoCleared,
        utstyr: utstyrCleared,
        rute: ruteCleared,
        kritiskeOmrader: kritiskeOmraderCleared

    };
}]);

myapp.factory('CurrentPageObject', ['Info', 'Utstyr', 'Rute', 'KritiskeOmrader', '$state',
    function(Info, Utstyr, Rute, KritiskeOmrader, $state) {

        return function () {
            var states = $state.current.name.split(".");
            if(states[0] === "info"){
                return Info[states[1]];
            } else if(states[0] === "utstyr"){
                return Utstyr[states[1]];
            } else if(states[0] === "rute"){
                return Rute[states[1]];
            } else if(states[0] === "kritiskeOmrader"){
                return KritiskeOmrader[states[1]];
            }
        }
    }]);


myapp.provider('Info', function () {
    var fasit = {
        skredvarsel: {
            faregrad: undefined,
            skredproblem: undefined,
            tilleggsbelastning: undefined,
            skredstorrelse: undefined,  //2:små 3:middels 4:store 5:svært store
            sannsynlighet: undefined,  //2:lite sannsynlig 3:mulig 4:sannsynlig 5:svært sannsynlig

            bratteHeng: undefined,
            omraderNaerRygger: undefined,
            terrengFeller: undefined,
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

            temperatur: undefined,
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
            skredvarsel: MenuItem("Skredvarsel", ".skredvarsel", fasit.skredvarsel),
            vaer: MenuItem("Vær", ".vaer", fasit.vaer),
            alpineFarer: MenuItem("Alpine farer", ".alpineFarer", fasit.alpineFarer)
        };
    }];
    this.setFasit = function (newFasit) {
        fasit = newFasit;
    }
});
myapp.provider('Utstyr', function () {
    var fasit = {
        list: {
            skredsoker: undefined,
            spade: undefined,
            sokestang: undefined,
            ballongsekkAvalungSkredball: undefined,
            kartKompassHoydemaler: undefined,
            mobiltelefon: undefined,
            forstehjelpssett: undefined,
            bivuakksekk: undefined
        },
        deltakere: {
            gruppeStorrelse: undefined,
            erfaring: undefined,
            motivasjon: undefined
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
            pause: undefined,
            spesifikkStart: undefined,
            startTid: undefined
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
        egenskaper: {},
        nedkjoring: {
            sammeRute: undefined
        }
    };
    this.$get = ["MenuItem", function (MenuItem) {
        return {
            egenskaper: MenuItem("Egenskaper", ".egenskaper", fasit.egenskaper),
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
    var infoVarslingsOmrade = 'Varslingsomrade';
    var skredvarselDato = 'dato';
    var skredvarselLink = 'url';
    var ruteTekst = 'tekst';
    this.$get = function () {
        return {
            turTittel: turTittel,
            hoydeMeter: hoydeMeter,
            infoVarslingsOmrade: infoVarslingsOmrade,
            skredvarselLink: skredvarselLink,
            skredvarselDato: skredvarselDato,
            ruteTekst: ruteTekst
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

});