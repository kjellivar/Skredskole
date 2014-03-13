myapp.controller("planleggingsskjemaCtrl", function($scope, $window){

    var doc = new jsPDF();
    doc.setFontSize(22);
    doc.text(20, 20, 'Planleggingsskjema ' + $scope.turTittel);
    doc.setFontSize(16);
    doc.text(20, 30, 'This is client-side Javascript, pumping out a PDF.');
    doc.addPage();
    doc.text(20, 20, 'Do you like that?');

    $scope.showRegularButton = false;

    if($window.Uint8Array){
        $scope.showRegularButton = true;
    } else {
        //console.log("Du har dårlig browser");
        Downloadify.create('downloadify',{
            filename: 'Example.pdf',
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
      doc.save('Planleggingsskjema-' + $scope.turTittel + '.pdf');
    };
  
});