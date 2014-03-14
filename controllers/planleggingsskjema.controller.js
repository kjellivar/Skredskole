myapp.controller("planleggingsskjemaCtrl", function($scope, $window){

    var doc = new jsPDF();
    var docFilename = 'Planleggingsskjema-' + $scope.turTittel + '.pdf';

    var x = 20;
    var y = 20;
    doc.setFontSize(22);
    doc.text(x, y, 'Planleggingsskjema');
    doc.setFontSize(14);
    addText('Turmål', $scope.turTittel);
    addText('Høydeforskjell', $scope.rute.distanse.svar.hoyde);
    addText('Distanse', $scope.rute.distanse.svar.lengde);
    addText('Tidsplan', 'Opp: ' + $scope.rute.tidsplan.svar.oppstigning + 't Pause: ' + $scope.rute.tidsplan.svar.pause + 't Nedstigning: ' + $scope.rute.tidsplan.svar.nedfart);
/*    addText('Nedfartsrute', );
    addText('Gruppe', );*/


    function addText(title, text){
        y = y + 10;
        if(y > 270){
            doc.addPage();
            y = 20;
        }
        doc.text(x, y, title);
        doc.text(x + 50, y, text + '');
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

    $scope.areAllAreasCleared = function() {
      return $scope.isInfoCleared() && $scope.isUtstyrCleared() && $scope.isRuteCleared() && $scope.isKritiskeOmraderCleared();
    };

    $scope.saveDoc = function() {
      doc.save(docFilename);
    };
  
});