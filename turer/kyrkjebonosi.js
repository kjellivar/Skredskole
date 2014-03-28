myapp.config(function (InfoProvider, UtstyrProvider, RuteProvider, KritiskeOmraderProvider, AppDataProvider) {
    InfoProvider.setFasit({
        skredvarsel: {
            faregrad: 2,
            skredproblem: 'torreFlakskred',
            skredstorrelse: 1,  //1:små 2:middels 3:store 4:svært store
            sannsynlighet: 2,  //1:lite sannsynlig 2:mulig 3:sannsynlig 4:svært sannsynlig
            tilleggsbelastning: 'liten',
            leomrader: true,
            vindtransportertSno: true,
            n: true, no: true, o: true, so: true, v: true, nv: true,
            hoydeniva: 700
        },
        vaer: {
            sno: true,
            lettTilFriskBris: true,
            begrensetSikt: true,
            nullisoterm: 300
        },
        alpineFarer: {
            fall: true,
            klipper: true
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
            helning1: 30,
            hoyde1: 1200,
            s1: true,
            bratteHeng1: true,
            leomrader1: true,
            helning2: 30,
            hoyde2: 1460,
            s2: true,
            leomrader2: true,
            omraderMedMyeSteiner2: true
    },
        nedkjoring: {sammeRute: "required"}
    });

    AppDataProvider.setTurTittel('Kyrkjebønosi');
    AppDataProvider.setHoydeMeter('931');
    AppDataProvider.setInfoVarslingsOmrade(['Kyrkjebønosi ligger i varslingsregion Hemsedalsfjella. ' ,
        'Et heng ved 1280 – 1310 moh er det første kritiske punktet. Dette henget møter man etter å ha forlatt skogen. Dette henget leder opp til ryggen som vil være det naturlige veivalget videre. Henget det her er snakk om er et leområde for fremherskende vindretning (vestavind) i Hemsedalsfjella. Henget er om lag 30 grader bratt og det har blitt observert selvutløste skred her. ' ,
        'Ryggen er preget av fremstikkende steiner hele veien og noen renneformasjoner i nedre del. Renneformasjonene i nedre del vil samle vindtransportert snø både på vestlig og østlig vindretning. Terrenget på ryggen er om lag 35 grader bratt og har en ugunstig utløpsbane for eventuelle skred med mange store steiner. ' ,
        'Den første delen av nedkjøring fra toppen av Kyrkjebønosi (1671 moh) går i slakt terreng. Når det bratner til har en i grove trekk fire nedkjøringsalternativ der terrenget smalner inn. Alle nedkjøringsalternativene har en ugunstig utløpssone for eventuelle skred da alle ender i en bekkedal. Vær oppmerksom på omkringliggende brattheng som kan fjernutløses ved ferdsel ned mot og i botnen.']);
    AppDataProvider.setSkredvarselDato('18.02.2014');
    AppDataProvider.setSkredvarselLink('http://varsom.no/Snoskred/Hemsedalsfjella/?date=18.02.2014');
    AppDataProvider.setRuteTekst('Start ved grustaket ved Kyrkjebøen. Følg sommerstien nordøstover gjennom skogen i overkant av bratt område ned mot bekken. Når det blir brattere dreier en oppover mot nord -nordvest. På cirka 1120moh kommer man ut av skogen og møter et bratt heng hvor selvutløste skred er observert. Dette henget ligger i le for vestavinden som er rådende i området. Henget leder opp til en rygg som er naturlig å følge videre oppover. Ryggen er preget av fremstikkende steiner og renneformasjoner som kan samle snø. Etter hvert vil helningen avta og man kan følge ryggen nordover til toppen. Det finnes flere alternative nedfarter, hvor alle går i bratt terreng (> 30°), og flere inneholder terrengfeller som bekkedaler og skog.');

});
