skredskoleAngularApp.config(function(InfoProvider, UtstyrProvider, RuteProvider, KritiskeOmraderProvider, NedkjoringProvider, AppDataProvider) {
    AppDataProvider.setTurTittel('Skittentind');
    AppDataProvider.setHoydeMeter('850');
    AppDataProvider.setSkredvarselLink('http://varsom.no/Snoskred/Tromso/?date=31.12.2013');
    AppDataProvider.setRuteTekst(['Tegn inn rute for Skittentind i kartet. Følgende beskrivelse er gitt for turen: Turen opp til Skittentind starter fra veien ved vestsiden av Kattfjordvatnet. Gå nordvest gjennom en sørvendt bratt skråning i bjørkeskog. Over skogen er det en 200 meter høy bratt fjellside hvor naturlige skred ofte forekommer med utløpsområde i deler av skogen hvor ruta går. Drei deretter vestover over bekken mot Trollskarvatnet. Herifra går man nordover opp en tydelig skålformasjon. Vær oppmerksom på at man her befinner seg i potensielle utløpsområder fra store skred fra en 400 meter høy sørøst-vendt flanke (til venstre), samt skred fra en 100 meter høy vestvendt flanke (til høyre). Dette punktet er ansett som det første større kritiske punktet på turen. Det er mulig å følge en noenlunde god rute opp dette partiet, og passe på å gjøre det med kort eksponeringstid. Ved tegn på ustabile forhold bør man vurdere å snu før man beveger seg inn i toppflanken. På veien opp den østvendte toppflanken bør man holde avstand fra et østvendt heng (650 -750 moh) som er opp mot 40° bratt. I toppflanken ferdes man i et utløpsområde for veldig store skred, samtidig som kortere partier er rundt 30 til 40° bratt, noe som kan løse ut skred i mindre skråninger. Dette partiet er ansett som det andre kritiske punktet med turen. De fleste snur på skitoppen, men vil man opp på det høyeste punktet må man traversere østflanken før man bestiger toppen fra nord. Traversen går i bratt terreng som er skredutsatt, og ofte er siste del opp mot toppen isete. Man bør derfor vurdere å sette fra seg skiene eller bruke skarejern. Nedkjøringen følger samme rute som turen opp, med mulighet for ulike varianter det siste stykket. En variant er å kjøre den bratte sydsiden ned fra Trollskarvatnet. Vær oppmerksom på at forholdene ofte har endret seg fra oppturen på morgenen til nedkjøring midt på dagen. Det er også ofte flere grupper på tur i dette området, så pass på at du ikke setter andre folk i fare ved å utløse skred ovenfor dem.']);
    AppDataProvider.setInfoVarslingsOmrade(['Toppen ligger i varslingsområdet Tromsø. Skittentind er en god læringstur for den viderekomne toppturgåeren. Det er mulig å gjøre gode veivalg for å unngå unødvendig risiko. Det er ikke mulig å unngå skredterreng og turen anbefales derfor kun når det er generelt stabile forhold. Skittentind er en av de mest populære turene på Kvaløya. ']);
    AppDataProvider.setBilder({
        kart: '/Global/Snoskred/Skredskole/Turer/Kart/Skittentind_kart.jpg',
        kartMedLosning: '/Global/Snoskred/Skredskole/Turer/Kart/Skittentind_rute.jpg',
        kartMedKritiskeOmrader: '/Global/Snoskred/Skredskole/Turer/Kart/Skittentind_rute-utsatt.jpg',
        kartKritiskOmrade1Zoom: '/Global/Snoskred/Skredskole/Turer/Kart/Skitentind%20kritisk%20punkt%20nr1.png',
        kartKritiskOmrade2Zoom: '/Global/Snoskred/Skredskole/Turer/Kart/Skittentind%20kritisk%20punkt%20nr2.png'
    });
    InfoProvider.setFasit({
        skredvarsel: {
            faregrad: 1,
            skredproblem: 'torreFlakskred',
            skredstorrelse: 1,
            sannsynlighet: 1,
            tilleggsbelastning: 'stor',
            vindtransportertSno: true,
            n: true,
            no: true,
            v: true,
            nv: true,
            hoydeniva: 500
        },
        vaer: {

            sno: true,

            kulingStorm: true,
            godSikt: true

        },
        alpineFarer: {
            fall: true,
            bresprekker: undefined,
            skalver: undefined,
            klipper: undefined,
            vindavkjoling: true
        }
    });
    RuteProvider.setFasit({
        tidsplan: {
            oppstigning: 3,
            nedfart: 1,
            spesifikkStart: false
        },
        rutevalg: {
            rutevalg: true
        },
        distanse: {
            lengde: 3400,
            hoyde: 800
        }
    });
    KritiskeOmraderProvider.setFasit({
        egenskaper: {
            helning1: 30,
            hoyde1: 600,
            n1: undefined,
            no1: undefined,
            o1: undefined,
            so1: undefined,
            s1: true,
            sv1: undefined,
            v1: undefined,
            nv1: undefined,
            bratteHeng1: true,
            leomrader1: true,
            renner1: undefined,
            omraderMedMyeSteiner1: undefined,
            helning2: 35,
            hoyde2: 850,
            n2: undefined,
            no2: undefined,
            o2: true,
            so2: undefined,
            s2: undefined,
            sv2: undefined,
            v2: undefined,
            nv2: undefined,
            bratteHeng2: true,
            leomrader2: true,
            renner2: undefined,
            omraderMedMyeSteiner2: undefined
        }
    });

    NedkjoringProvider.setFasit({
        nedkjoring: {
            sammeRute: 'required'
        }
    });
});