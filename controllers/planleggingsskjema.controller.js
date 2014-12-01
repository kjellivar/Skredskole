skredskoleAngularApp.controller("planleggingsskjemaCtrl", function($scope, $window, Cleared, Info, Rute, Utstyr, KritiskeOmrader, Nedkjoring, AppData){

    function createPdf(empty) {

        var doc = new jsPDF();
        var docFilename = 'Planleggingsskjema';
        if(!empty) {
            docFilename += '-' + AppData.turTittel;
        }
        docFilename += '.pdf';

        var imgLogo = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/4REARXhpZgAATU0AKgAAAAgABAE7AAIAAAASAAAISodpAAQAAAABAAAIXJydAAEAAAAkAAAQ1OocAAcAAAgMAAAAPgAAAAAc6gAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEFuZHJlYXMgTHVkdmlnc2VuAAAFkAMAAgAAABQAABCqkAQAAgAAABQAABC+kpEAAgAAAAM4MgAAkpIAAgAAAAM4MgAA6hwABwAACAwAAAieAAAAABzqAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMjAxNDowODoxMSAxNDoyMTo1MQAyMDE0OjA4OjExIDE0OjIxOjUxAAAAQQBuAGQAcgBlAGEAcwAgAEwAdQBkAHYAaQBnAHMAZQBuAAAA/+ELJGh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8APD94cGFja2V0IGJlZ2luPSfvu78nIGlkPSdXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQnPz4NCjx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iPjxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+PHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9InV1aWQ6ZmFmNWJkZDUtYmEzZC0xMWRhLWFkMzEtZDMzZDc1MTgyZjFiIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iLz48cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0idXVpZDpmYWY1YmRkNS1iYTNkLTExZGEtYWQzMS1kMzNkNzUxODJmMWIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyI+PHhtcDpDcmVhdGVEYXRlPjIwMTQtMDgtMTFUMTQ6MjE6NTEuODE1PC94bXA6Q3JlYXRlRGF0ZT48L3JkZjpEZXNjcmlwdGlvbj48cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0idXVpZDpmYWY1YmRkNS1iYTNkLTExZGEtYWQzMS1kMzNkNzUxODJmMWIiIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyI+PGRjOmNyZWF0b3I+PHJkZjpTZXEgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj48cmRmOmxpPkFuZHJlYXMgTHVkdmlnc2VuPC9yZGY6bGk+PC9yZGY6U2VxPg0KCQkJPC9kYzpjcmVhdG9yPjwvcmRmOkRlc2NyaXB0aW9uPjwvcmRmOlJERj48L3g6eG1wbWV0YT4NCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAg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';
        doc.addImage(imgLogo, 'JPEG', 167, 6, 35, 10);

        doc.setFontSize(10);
        doc.setTextColor(150, 150, 150);
        var now = new Date();
        var createdDate = now.getDate() + '-' + (now.getMonth() + 1) + '-' +  now.getFullYear();
        doc.text(168, 20, 'Laget den ' + createdDate);

        var x = 20;
        var y = 20;
        var margin = 60;
        var lineheight = 10;
        var seperatorWidth = 0.5;
        doc.setFontSize(22);
        doc.setTextColor(40,40,40);
        doc.text(x, y, 'Planleggingsskjema');
        doc.setFontSize(14);
        doc.setDrawColor(200,200,200);

        var newPage = function(){
            doc.addPage();
            y = 10;
        };

        var addText = function (title, textOrArray, box, fontSize){
            if(title != ''){
                y = y + lineheight;
            } else {
                y = y + (lineheight/2) + 2;
            }
            doc.setTextColor(0,0,0);
            doc.setDrawColor(0,0,0);
            var text = "";

            if(angular.isArray(textOrArray)){
                angular.forEach(textOrArray, function(val){
                    val.prefix = val.prefix || "";
                    val.postfix = val.postfix || "";
                    if(angular.isDefined(val.text) && !empty){
                        text += val.prefix + val.text + val.postfix;
                    } else {
                        text += val.prefix + "______" + val.postfix;
                    }
                });
            } else if(angular.isObject(textOrArray)){
                textOrArray.prefix = textOrArray.prefix || "";
                textOrArray.postfix = textOrArray.postfix || "";
                if(angular.isDefined(textOrArray.text) && textOrArray.text !== "" && !empty){
                    text = textOrArray.prefix + textOrArray.text + textOrArray.postfix;
                } else {
                    text = textOrArray.prefix + "__________" + textOrArray.postfix;
                }
            } else {
                text = textOrArray;
            }

            if(fontSize){
                doc.setFontSize(fontSize);
            }
            if(y > 270){
                newPage();
            }
            if(angular.isDefined(box)){
                doc.rect(x + margin,y - 4,5,5);
                if(box === true  && !empty){
                    text = ' x   ' + text;
                } else {
                    text = '      ' + text;
                }
            }
            doc.text(x, y, title);
            doc.setTextColor(60,60,60);
            doc.setDrawColor(60,60,60);
            doc.text(x + margin, y, text + '');

        };

        var drawLine = function() {
            y+=2;
            doc.setDrawColor(220,220,220);
            doc.setLineWidth(seperatorWidth);
            var lineY = y + (lineheight/2) - (seperatorWidth*2) - 1;
            doc.line(x, lineY, 240 - margin, lineY);
        };

        // Generer PDF innhold
        if(!empty) {
            addText('Turmål', AppData.turTittel);
        } else {
            addText('Turmål', '__________');
        }
        drawLine();

        addText('Høydeforskjell', {text: Rute.distanse.svar.hoyde, postfix: " m"});
        addText('Distanse', {text: Rute.distanse.svar.lengde, postfix: " m"});
        drawLine();

        addText('Tidsplan', [{prefix: 'Opp: ', text: Rute.tidsplan.svar.oppstigning, postfix: 't'},
            {prefix: ' Pause: ', text: Rute.tidsplan.svar.pause, postfix: 't'},
            {prefix: ' Nedstigning: ', text: Rute.tidsplan.svar.nedfart, postfix:'t'}]);
        addText('', [{prefix: 'Total tid: ', text: (Rute.tidsplan.svar.oppstigning+Rute.tidsplan.svar.pause+Rute.tidsplan.svar.nedfart) || undefined, postfix: 't'},
            {prefix: ' Starttid: Kl. ', text: Rute.tidsplan.svar.startTid}]);
        drawLine();

        addText('Nedfartsrute', 'Samme som oppturen', Nedkjoring.nedkjoring.svar.sammeRute === true);
        addText('', 'Annen nedfartsrute', Nedkjoring.nedkjoring.svar.sammeRute === false);
        drawLine();

        //Deltakere
        addText('Gruppe', {prefix: 'Antall turdeltakere: ', text: Utstyr.deltakere.svar.gruppeStorrelse});
        addText('Motivasjon', 'Tilbakeholden', Utstyr.deltakere.svar.motivasjon == 1);
        addText('', 'Behersket', Utstyr.deltakere.svar.motivasjon == 2);
        addText('', 'Ambisiøs', Utstyr.deltakere.svar.motivasjon == 3);
        addText('Erfaring', 'Lite erfaring', Utstyr.deltakere.svar.erfaring == 1);
        addText('', 'Noe erfaring', Utstyr.deltakere.svar.erfaring == 2);
        addText('', 'Erfarne', Utstyr.deltakere.svar.erfaring == 3);
        drawLine();

        //Vær
        addText('Nedbør', 'Snø', Info.vaer.svar.sno === true);
        addText('', 'Regn', Info.vaer.svar.regn === true);
        addText('', 'Ingen nedbør', Info.vaer.svar.ingenNedbor === true);

        addText('Sikt', 'God', Info.vaer.svar.godSikt === true);
        addText('', 'Begrenset', Info.vaer.svar.begrensetSikt === true);
        addText('', 'Dårlig', Info.vaer.svar.darligSikt === true);

        addText('Vind', 'Svak', Info.vaer.svar.svakVind === true);
        addText('', 'Lett til frisk bris', Info.vaer.svar.lettTilFriskBris === true);
        addText('', 'Kuling, storm', Info.vaer.svar.kulingStorm === true);

        //addText('Nullgradersgrense', {text: Info.vaer.svar.nullisoterm, postfix: " m"});
        drawLine();

        //Skredvarsel
        addText('Faregrad', {text: Info.skredvarsel.svar.faregrad});
        addText('Skredproblem', {text: Info.labels.skredproblem[Info.skredvarsel.svar.skredproblem]});

        newPage();

        // Årsak til skredfare
        addText('Årsak til skredfare', Info.labels.snodekke.nySno, Info.skredvarsel.svar.nySno === true);
        addText('', Info.labels.snodekke.svakeLagISnopakken, Info.skredvarsel.svar.svakeLagISnopakken === true);
        addText('', Info.labels.snodekke.vatOgVannmettetSno, Info.skredvarsel.svar.vatOgVannmettetSno === true);
        addText('', Info.labels.snodekke.vindtransportertSno, Info.skredvarsel.svar.vindtransportertSno === true);

        /*addText('Utsatte områder', Info.labels.utsatt.leomrader, Info.skredvarsel.svar.leomrader  === true);
        addText('', Info.labels.utsatt.overgangFraLiteTilMyeSno, Info.skredvarsel.svar.overgangFraLiteTilMyeSno === true);
        addText('', Info.labels.utsatt.terrengfeller, Info.skredvarsel.svar.terrengfeller === true);*/

        addText('Tilleggsbelastning', {text: Info.labels.tilleggsbelastning[Info.skredvarsel.svar.tilleggsbelastning]});
        addText('Forventet skredstørrelse', {text: Info.labels.skredstorrelse[Info.skredvarsel.svar.skredstorrelse]});
        addText('Sannsynlighet for skred', {text: Info.labels.sannsynlighet[Info.skredvarsel.svar.sannsynlighet]});
        addText('Utsatt høydenivå', {text: Info.skredvarsel.svar.hoydeniva, postfix:" meter"});

        var eksposisjon_str = generateEksposisjonString({n:'N',no:'NØ',o:'Ø',so:'SØ',s:'S',sv:'SV',v:'V',nv:'NV'});
        addText('Eksposisjon', {text: eksposisjon_str});
        drawLine();

        // Kritisk område 1
        addText('Kritisk område 1', {text: '  '});
        addText('Helning i grader', {text: KritiskeOmrader.egenskaper.svar.helning1});
        addText('Høyde i meter', {text: KritiskeOmrader.egenskaper.svar.hoyde1});
        addText('Himmelretning', {text: generateHimmelretningString(1, KritiskeOmrader.egenskaper.svar)});
        addText('Spesielt kritisk', 'Bratte heng (over 30°)', KritiskeOmrader.egenskaper.svar.bratteHeng1 === true);
        addText('', 'Leområder, leheng', KritiskeOmrader.egenskaper.svar.leomrader1 === true);
        addText('', 'Renner, depresjoner', KritiskeOmrader.egenskaper.svar.renner1 === true);
        addText('', 'Områder med mye steiner/blokker', KritiskeOmrader.egenskaper.svar.omraderMedMyeSteiner1 === true);

        // Kritisk område 2
        addText('Kritisk område 2', {text: '  '});
        addText('Helning i grader', {text: KritiskeOmrader.egenskaper.svar.helning2});
        addText('Høyde i meter', {text: KritiskeOmrader.egenskaper.svar.hoyde2});
        addText('Himmelretning', {text: generateHimmelretningString(2, KritiskeOmrader.egenskaper.svar)});
        addText('Spesielt kritisk', 'Bratte heng (over 30°)', KritiskeOmrader.egenskaper.svar.bratteHeng2 === true);
        addText('', 'Leområder, leheng', KritiskeOmrader.egenskaper.svar.leomrader2 === true);
        addText('', 'Renner, depresjoner', KritiskeOmrader.egenskaper.svar.renner2 === true);
        addText('', 'Områder med mye steiner/blokker', KritiskeOmrader.egenskaper.svar.omraderMedMyeSteiner2 === true);


        // Kritisk område 2

        function generateHimmelretningString(num, svar) {
            var s = '';
            if(svar['n' + num]) s += 'Nord';
            if(svar['no' + num]) s += ' Nordøst';
            if(svar['o' + num]) s += ' Øst';
            if(svar['so' + num]) s += ' Sørøst';
            if(svar['s' + num]) s += ' Sør';
            if(svar['sv' + num]) s += ' Sørvest';
            if(svar['v' + num]) s += ' Vest';
            if(svar['nv' + num]) s += ' Nordvest';
            return s;
        }

        function generateEksposisjonString(skal_sjekkes){
            var eksposisjon = [];
            angular.forEach(skal_sjekkes, function (value, key) {
                if(Info.skredvarsel.svar[key]){
                    eksposisjon.push(value);
                }
            });
            var eksposisjon_str = '';
            for (var i = 0; i < eksposisjon.length; i++) {
                eksposisjon_str += eksposisjon[i];
                if(i < eksposisjon.length - 1) {
                    eksposisjon_str += ', ';
                }

            }
            return eksposisjon_str;
        }

        // download file
        doc.save(docFilename);

    }

    $scope.showRegularButton = false;

    if($window.Uint8Array){
        $scope.showRegularButton = true;
    } else {
        //console.log("Du har dårlig browser");
        Downloadify.create('downloadify',{
            filename: docFilename,
            dataType: 'base64',
            data: function(){
                return (btoa(doc.output()));
            },
            onComplete: function(){ alert('Filen har blitt lagret!'); },
            onCancel: function(){ alert('Du har kansellert lagringen av filen'); },
            onError: function(){ alert('You must put something in the File Contents or there will be nothing to save!'); },
            swf: 'libs/downloadify/media/downloadify.swf',
            downloadImage: 'libs/downloadify/images/download.png',
            width: 100,
            height: 30,
            transparent: true,
            append: false
        });
    }

    $scope.cleared = Cleared;

    $scope.saveDoc = function() {
        return createPdf(false);
    };

    $scope.createEmptyDoc = function() {
        return createPdf(true);
    };
  
});