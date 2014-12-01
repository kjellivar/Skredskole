skredskoleAngularApp.config(function (InfoProvider, UtstyrProvider, RuteProvider, KritiskeOmraderProvider, AppDataProvider) {
    InfoProvider.setFasit({
        skredvarsel: {
            faregrad: 2,
            skredproblem: 'torreFlakskred',
            skredstorrelse: 1,  //1:små 2:middels 3:store 4:svært store
            sannsynlighet: 2,  //1:lite sannsynlig 2:mulig 3:sannsynlig 4:svært sannsynlig
            tilleggsbelastning: 'liten',
            terrengfeller: true,
            vindtransportertSno: true,
            n: true, no: true, o: true, so: true, s: true,
            hoydeniva: 500
        },
        vaer: {
            sno: true,
            lettTilFriskBris: true,
            begrensetSikt: true,
            nullisoterm: 300
        },
        alpineFarer: {
            fall: true,
            skalver: true
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
        distanse: {lengde: 4000, hoyde: 900}
    });
    KritiskeOmraderProvider.setFasit({
        egenskaper: {
            helning1: 35,
            hoyde1: 1100,
            o1: true,
            bratteHeng1: true,
            leomrader1: true,
            helning2: 30,
            hoyde2: 1200,
            no2: true,
            leomrader2: true,
            skavler2: true
    },
        nedkjoring: {sammeRute: "required"}
    });

    AppDataProvider.setBilder({
        kart: "img/turer/blanebba/Blånebba_kart.jpg",
        kartMedLosning: "img/turer/blanebba/Blånebba_rute.jpg",
        kartMedKritiskeOmrader: "",
        kartKritiskOmrade1Zoom: "img/turer/blanebba/Blånebba_utsatt1_zoom3.jpg",
        kartKritiskOmrade2Zoom: "img/turer/blanebba/Blånebba_utsatt2_zoom3.jpg"
    });

    AppDataProvider.setTurTittel('Blånebba');
    AppDataProvider.setHoydeMeter('940');
    AppDataProvider.setInfoVarslingsOmrade([
        'Blånebba ligger i varslingsregion Romsdal. ' ,
        'Henget opp til toppryggen har stigende bratthet i toppen. Snittbratthet på 35 grader. Ofte opp mot 40 grader da toppen av henget er et leheng for sørlige og vestlige vindretninger. På en slik formasjon kan vi si at når vi kan måle 35 grader bratthet på kartet så vil det helt sikkert være parti som er brattere i virkeligheten.' ,
        'Nordsiden av Blånebba er svært bratt og det kan bygge seg store skavler ut her. Når man går opp ryggen mot toppen kan det stikke opp en del steiner som kan gjøre det fristende å gå ut på skavlene. Hold deg derfor godt inne på ryggen. ',
        'Utglidning er et faremoment; Selve toppryggen er ikke bratt, men det er bratt på sidene. Dersom det er hardpakket snø eller isete på ryggen kan det være påkrevd med stegjern og øks for å gå helt til toppen. ',
        'Blånebba er ligger utsatt til i forhold til vind og vær. Dersom det blåser når du kommer over skoggrensa vil det sannsynligvis blåse enda hardere på toppryggen. Gode klær og snøbriller kan være nyttig om du vil trosse vinden.'
    ]);
    AppDataProvider.setSkredvarselDato('17.02.2014');
    AppDataProvider.setSkredvarselLink('http://varsom.no/Snoskred/Romsdal/?date=17.02.2014');
    AppDataProvider.setRuteTekst('Start fra Venjedalssetra og skrå sydvest opp igjennom skogen. Ved skoggrensa (600 moh) skrår en nordvest innover dalen. Pass på at skred kan løsne i den bratte nordøst siden av Blånebba og nå helt ned mot ruta. Hold derfor god avstand fra fjellsiden. Legg merke til eventuelle skavler som har bygd seg opp langts toppryggen. Når terrenget flater ut på omtrent 850 moh skrår en vestover og følger en liten rygg mot høyde 1178 opp på selve fjellryggen. Her er terrenget bratt, 30-40°. Deretter følger en ryggen sørvestover mot selve toppen av Blånebba. Hold deg godt inne på ryggen pga. skavler. Siste parti kan være smalt og krevende med bratte stup på begge sider, så stegjern og øks kan være nødvendig for å nå toppen. Nedkjøringen følger samme rute som turen opp.');

});
