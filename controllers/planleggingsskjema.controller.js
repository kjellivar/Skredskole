myapp.controller("planleggingsskjemaCtrl", function($scope, $window, Cleared, Info, Rute, Utstyr, KritiskeOmrader, AppData){

    var doc = new jsPDF();
    var docFilename = 'Planleggingsskjema-' + $scope.turTittel + '.pdf';

    var x = 20;
    var y = 20;
    var margin = 50;
    var lineheight = 10;
    var seperatorWidth = 0.5;
    doc.setFontSize(22);
    doc.text(x, y, 'Planleggingsskjema');
    doc.setFontSize(14);
    doc.setDrawColor(200,200,200);
    addText('Turmål', AppData.turTittel);
    addText('Høydeforskjell', Rute.distanse.svar.hoyde);
    addText('Distanse', Rute.distanse.svar.lengde);
    addText('Tidsplan', 'Opp: ' + Rute.tidsplan.svar.oppstigning + 't Pause: ' + Rute.tidsplan.svar.pause + 't Nedstigning: ' + Rute.tidsplan.svar.nedfart + 't');
    addText('', 'Total tid: ' + (Rute.tidsplan.svar.oppstigning+Rute.tidsplan.svar.pause+Rute.tidsplan.svar.nedfart) + 't Starttid: Kl. ' + Rute.tidsplan.svar.startTid);
    addText('Nedfartsrute', 'Samme som oppturen', KritiskeOmrader.nedkjoring.svar.sammeRute);
    addText('', 'Annen nedfartsrute', !KritiskeOmrader.nedkjoring.svar.sammeRute);
    addText('Gruppe', 'Antall turdeltakere: ' + Utstyr.deltakere.delt);


    function addText(title, text, box){
        y = y + lineheight;
        doc.setDrawColor(0,0,0);
        if(y > 270){
            doc.addPage();
            y = 20;
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
        if(title !== ''){
            doc.setDrawColor(220,220,220);
            doc.setLineWidth(seperatorWidth);
            var lineY = y - (lineheight/2) - (seperatorWidth*2) - 1;
            doc.line(x, lineY, 240 - margin, lineY);
        }
    }

    $scope.showRegularButton = false;

    if($window.Uint8Array){
        $scope.showRegularButton = true;
    } else {
        //console.log("Du har dårlig browser");
        Downloadify.create('downloadify',{
            filename: docFilename,
            data: function(){
                return doc.output();
            },
            onComplete: function(){ alert('Your File Has Been Saved!'); },
            onCancel: function(){ alert('You have cancelled the saving of this file.'); },
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