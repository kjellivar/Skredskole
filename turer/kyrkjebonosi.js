myapp.config(function (InfoProvider, UtstyrProvider, RuteProvider, KritiskeOmraderProvider, AppDataProvider) {
    InfoProvider.setFasit({
        skredvarsel: {
            faregrad: 2,
            skredproblem: 'torreFlakskred',
            skredstorrelse: 3,  //2:små 3:middels 4:store 5:svært store
            sannsynlighet: 3,  //2:lite sannsynlig 3:mulig 4:sannsynlig 5:svært sannsynlig
            tilleggsbelastning: 'liten',
            bratteHeng: undefined,
            omraderNaerRygger: true,
            nySno: true,
            vindtransportertSno: true,
            n: true, no: true, o: true, so: true, v: true, nv: true,
            hoydeniva: 700
        },
        vaer: {
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
        },
        alpineFarer: {
            fall: true,
            bresprekker: true,
            skalver: true,
            klipper: true,
            vindavkjoling: true
        }
    });
    UtstyrProvider.setFasit({
        list: {
            skredsoker: true,
            spade: true,
            sokestang: true,
            //ballongsekkAvalungSkredball: true,
            kartKompassHoydemaler: true,
            mobiltelefon: true,
            forstehjelpssett: true
            //bivuakksekk: true
        },
        deltakere: {
            gruppeStorrelse: "required",
            erfaring: "required",
            motivasjon: "required"
        }

    });
    RuteProvider.setFasit({
        tidsplan: {
            oppstigning: 3,
            nedfart: 1,
            pause: 0.5,
            spesifikkStart: "required",
            startTid: "required"
        },
        rutevalg: {rutevalg: true},
        distanse: {lengde: "required", hoyde: 931}
    });
    KritiskeOmraderProvider.setFasit({
        egenskaper: {},
        nedkjoring: {sammeRute: "required"}
    });

    AppDataProvider.setTurTittel('Kyrkjebønosi');
    AppDataProvider.setHoydeMeter('931');
    AppDataProvider.setInfoVarslingsOmrade('Kyrkjebønosi ligger i varslingsregion Hemsedalsfjella.');
    AppDataProvider.setSkredvarselDato('18.02.2014');
    AppDataProvider.setSkredvarselLink('http://varsom.no/Snoskred/Hemsedalsfjella/?date=18.02.2014');
    AppDataProvider.setRuteTekst('Start ved grustaket ved Kyrkjebøen. Følg sommerstien nordøstover gjennom skogen i overkant av bratt område ned mot bekken. Når det blir brattere dreier en oppover mot nord -nordvest. På cirka 1120moh kommer man ut av skogen og møter et bratt heng hvor selvutløste skred er observert. Dette henget ligger i le for vestavinden som er rådende i området. Henget leder opp til en rygg som er naturlig å følge videre oppover. Ryggen er preget av fremstikkende steiner og renneformasjoner som kan samle snø. Etter hvert vil helningen avta og man kan følge ryggen nordover til toppen. Det finnes flere alternative nedfarter, hvor alle går i bratt terreng (> 30°), og flere inneholder terrengfeller som bekkedaler og skog.');

});
