myapp.controller("planleggingsskjemaCtrl", function($scope, $window, Cleared, Info, Rute, Utstyr, KritiskeOmrader, AppData){

    var doc = new jsPDF();
    var docFilename = 'Planleggingsskjema-' + AppData.turTittel + '.pdf';

    var x = 20;
    var y = 20;
    var margin = 60;
    var lineheight = 10;
    var seperatorWidth = 0.5;
    doc.setFontSize(22);
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
        doc.setDrawColor(0,0,0);
        var text = "";

        if(angular.isArray(textOrArray)){
            angular.forEach(textOrArray, function(val){
                val.prefix = val.prefix || "";
                val.postfix = val.postfix || "";
                if(angular.isDefined(val.text)){
                    text += val.prefix + val.text + val.postfix;
                } else {
                    text += val.prefix + "______" + val.postfix;
                }
            });
        } else if(angular.isObject(textOrArray)){
            textOrArray.prefix = textOrArray.prefix || "";
            textOrArray.postfix = textOrArray.postfix || "";
            if(angular.isDefined(textOrArray.text) && textOrArray.text !== ""){
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
            if(box === true){
                text = ' x    ' + text;
            } else {
                text = '      ' + text;
            }
        }
        doc.text(x, y, title);
        doc.text(x + margin, y, text + '');

    };

    var drawLine = function() {
        y+=2;
        doc.setDrawColor(220,220,220);
        doc.setLineWidth(seperatorWidth);
        var lineY = y + (lineheight/2) - (seperatorWidth*2) - 1;
        doc.line(x, lineY, 240 - margin, lineY);
    };


    addText('Turmål', AppData.turTittel);
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
    addText('Nedfartsrute', 'Samme som oppturen', KritiskeOmrader.nedkjoring.svar.sammeRute === true);
        addText('', 'Annen nedfartsrute', KritiskeOmrader.nedkjoring.svar.sammeRute === false);
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

    addText('Nullgradersgrense', {text: Info.vaer.svar.nullisoterm, postfix: " m"});
    drawLine();
    //Skredvarsel
    addText('Faregrad', {text: Info.skredvarsel.svar.faregrad});
    addText('Skredproblem', {text: Info.labels.skredproblem[Info.skredvarsel.svar.skredproblem]});

    newPage();

    addText('Årsak til skredfare', Info.labels.snodekke.nySno, Info.skredvarsel.svar.nySno === true);
    addText('', Info.labels.snodekke.svakeLagISnopakken, Info.skredvarsel.svar.svakeLagISnopakken === true);
    addText('', Info.labels.snodekke.vatOgVannmettetSno, Info.skredvarsel.svar.vatOgVannmettetSno === true);
    addText('', Info.labels.snodekke.vindtransportertSno, Info.skredvarsel.svar.vindtransportertSno === true);

    addText('Utsatte områder', Info.labels.utsatt.leomrader, Info.skredvarsel.svar.leomrader  === true);
    addText('', Info.labels.utsatt.overgangFraLiteTilMyeSno, Info.skredvarsel.svar.overgangFraLiteTilMyeSno === true);
    addText('', Info.labels.utsatt.terrengfeller, Info.skredvarsel.svar.terrengfeller === true);

    addText('Tilleggsbelastning', {text: Info.labels.tilleggsbelastning[Info.skredvarsel.svar.tilleggsbelastning]});
    addText('Forventet skredstørrelse', {text: Info.labels.skredstorrelse[Info.skredvarsel.svar.skredstorrelse]});
    addText('Sannsynlighet for skred', {text: Info.labels.sannsynlighet[Info.skredvarsel.svar.sannsynlighet]});
    addText('Utsatt høydenivå', {text: Info.skredvarsel.svar.hoydeniva, postfix:" meter"});


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
    var eksposisjon_str = generateEksposisjonString({n:'N',no:'NØ',o:'Ø',so:'SØ',s:'S',sv:'SV',v:'V',nv:'NV'});

    addText('Eksposisjon', {text: eksposisjon_str});

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
      doc.save(docFilename);
    };
  
});