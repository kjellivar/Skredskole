skredskoleAngularApp.controller("nedkjoringCtrl", function($scope){

    $scope.forrige = "kritiskeOmrader.egenskaper";
    $scope.neste = "planleggingsskjema";


    $scope.customAlerts = function () {
        return [
            {
                text: "Hvis du kjører samme vei som opp vet du hvilket terreng du har å forholde deg til, og du kan enkelt planlegge hvor dere burde kjøre disiplinert (hvor skal dere kjøre en og en, og hvor skal dere kjøre med avlastningsavstand?",
                show: $scope.kritiskeOmrader.nedkjoring.svar.sammeRute === 'Ja'
            },
            {
                text: "Å velge en annen vei ned enn opp krever det at dere gjør dere kjent med terrenget, enten gjennom kartet eller ved å ha sett terrenget på vei opp. Det vil kreve god planlegging, disiplin og evne til å kommuniser for å gjøre nedkjøringen til en trygg opplevelse. Dere må på forhånd avtale hvor dere skal stoppe, kjøre med avlastningsavstand også videre.",
                show: $scope.kritiskeOmrader.nedkjoring.svar.sammeRute === 'Nei'
            },
            {
                text: "Skal dere gå samme rute oppover som dere planlegger å kjøre ned?",
                show: $scope.kritiskeOmrader.nedkjoring.svar.sammeRute === undefined
            }
        ];
    };

});