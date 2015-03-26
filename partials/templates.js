angular.module("skredskoleAngularApp").run(["$templateCache", function($templateCache) {$templateCache.put("partials/directives/nveCanvas.html","<div class=\"row\"><div class=\"span2\"><a class=\"nve-btn\" ng-click=\"clearCanvas()\">Fjern tegning</a></div><div class=\"span2\"><a class=\"nve-btn\" ng-click=\"toggleSolution()\" ng-bind=\"toggleSolutionText\"></a></div></div><canvas ng-style=\"canvasbg\" width=\"{{canvasWidth}}\" height=\"{{canvasHeight}}\">Your browser can not show this example.</canvas>");
$templateCache.put("partials/directives/nveCheckboxButton.html","<button type=\"button\" class=\"btn btn-block\" ng-click=\"nveCheckboxButton = !nveCheckboxButton\" ng-class=\"{active: nveCheckboxButton}\" ng-transclude></button>");
$templateCache.put("partials/directives/nveCompass.html","<div class=\"skredkoleCompassBG\"><svg height=\"200\" width=\"200\" style=\"fill:white;stroke:#ccc;stroke-width:1\" class=\"skredskoleCompass\"><polygon points=\"100,100 138,8 62,8\" ng-click=\"model[keys[0]] = !model[keys[0]]\" ng-class=\"{selected: model[keys[0]]}\"/><polygon points=\"100,100 192,62 138,8\" ng-click=\"model[keys[1]] = !model[keys[1]]\" ng-class=\"{selected: model[keys[1]]}\"/><polygon points=\"100,100 192,138 192,62\" ng-click=\"model[keys[2]] = !model[keys[2]]\" ng-class=\"{selected: model[keys[2]]}\"/><polygon points=\"100,100 138,192 192,138\" ng-click=\"model[keys[3]] = !model[keys[3]]\" ng-class=\"{selected: model[keys[3]]}\"/><polygon points=\"100,100 62,192 138,192\" ng-click=\"model[keys[4]] = !model[keys[4]]\" ng-class=\"{selected: model[keys[4]]}\"/><polygon points=\"100,100 8,138 62,192\" ng-click=\"model[keys[5]] = !model[keys[5]]\" ng-class=\"{selected: model[keys[5]]}\"/><polygon points=\"100,100 8,62 8,138\" ng-click=\"model[keys[6]] = !model[keys[6]]\" ng-class=\"{selected: model[keys[6]]}\"/><polygon points=\"100,100 62,8 8,62\" ng-click=\"model[keys[7]] = !model[keys[7]]\" ng-class=\"{selected: model[keys[7]]}\"/><g font-size=\"12\" fill=\"#000\" stroke=\"none\" text-anchor=\"middle\"><text x=\"100\" y=\"20\">N</text><text x=\"185\" y=\"105\">Ø</text><text x=\"100\" y=\"190\">S</text><text x=\"15\" y=\"105\">V</text></g></svg></div>");
$templateCache.put("partials/directives/nveSkredFooter.html","<hr><!-- Modal --><div id=\"myModal\" class=\"modal hide fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\"><div class=\"modal-header\"><button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">×</button><h3 id=\"myModalLabel\">Har du fylt ut rett?</h3></div><div class=\"modal-body\"><div class=\"alert\" ng-show=\"(containerObject.alerts | filter:{show:true})[0].show\"><p ng-repeat=\"item in containerObject.alerts | filter:{show:true}\" ng-bind=\"item.text\"></p></div><div ng-show=\"containerObject.item.cleared\"><p class=\"text-success\">Alt fylt ut korrekt!</p></div><div class=\"progress progress-striped\"><div class=\"bar\" ng-style=\"containerObject.progressbarStyle\" ng-class=\"containerObject.barClass\"></div></div></div><div class=\"modal-footer\"><a class=\"btn\" data-dismiss=\"modal\" aria-hidden=\"true\">Lukk</a></div></div><div class=\"row\"><div class=\"span1\" ng-class=\"{disabled: !forrige}\"><a class=\"nve-btn blue arrow-left\" ui-sref=\"{{forrige}}\"></a></div><div class=\"offset3 span4\"><div class=\"row\"><div class=\"span4\"><a class=\"nve-btn blue\" data-target=\"#myModal\" data-toggle=\"modal\" class=\"btn btn-primary btn-large\" ng-click=\"visAntallKorrekteSvar()\">Sjekk svar</a></div></div><div class=\"row\"><div class=\"span4\"><a class=\"nve-btn\" ng-click=\"toggleFasit()\" ng-bind=\"fasitKnappTekst\"></a></div></div></div><div class=\"offset3 span1\" ng-class=\"{disabled: !neste}\"><a class=\"nve-btn blue arrow-right\" ui-sref=\"{{neste}}\"></a></div></div>");
$templateCache.put("partials/directives/nveSkredproblemBoks.html","<h5 ng-bind=\"boks.name\"></h5><div><a style=\"display:inline-block\" ng-repeat=\"item in boks.values\" class=\"nve-btn\" ng-click=\"changeModel(item.v)\" ng-class=\"{blue: nveModel == item.v, \'btn-block\': boks.vertical}\"><span ng-bind=\"item.t\"></span></a></div><!--\r\n<div class=\"damagesprite damagesize damage{{nveModel}}\">\r\n    <div ng-repeat=\"item in boks.values\" class=\"labels damage{{item.v}}Label\" ng-click=\"changeModel(item.v)\" ng-class=\"{activelabel: nveModel == item.v}\" >\r\n        <span ng-bind=\"item.t\"></span>\r\n    </div>\r\n    <div id=\"damagefooter\" class=\"labels activelabel damagefooter\">\r\n        <span ng-bind=\"boks.name\"></span>\r\n    </div>\r\n</div>-->");
$templateCache.put("partials/directives/nveSubMenuItem.html","<a ui-sref=\"{{nveSubMenuItem.link}}\" ng-class=\"{\'text-success\': nveSubMenuItem.cleared}\"><span ng-bind=\"nveSubMenuItem.navn\"></span> <span ng-show=\"nveSubMenuItem.cleared\">&#x2713;</span></a>");
$templateCache.put("partials/views/planleggingsskjema.html","<h3>Planleggingsskjema</h3><ul class=\"unstyled\"><li><a ui-sref=\"info\" ng-class=\"{\'text-warning\':!cleared.info(), \'text-success\':cleared.info()}\">Forberedelse</a></li><li><a ui-sref=\"utstyr\" ng-class=\"{\'text-warning\':!cleared.utstyr(), \'text-success\':cleared.utstyr()}\">Turgruppe</a></li><li><a ui-sref=\"rute\" ng-class=\"{\'text-warning\':!cleared.rute(), \'text-success\':cleared.rute()}\">Rute</a></li><li><a ui-sref=\"kritiskeOmrader.egenskaper\" ng-class=\"{\'text-warning\':!cleared.kritiskeOmrader(), \'text-success\':cleared.kritiskeOmrader()}\">Kritiske områder</a></li><li><a ui-sref=\"nedkjoring.nedkjoring\" ng-class=\"{\'text-warning\':!cleared.nedkjoring(), \'text-success\':cleared.nedkjoring()}\">Nedkjøring</a></li></ul><button type=\"button\" class=\"btn\" ng-click=\"saveDoc()\" ng-if=\"showRegularButton\">Last ned</button> <button type=\"button\" class=\"btn\" ng-click=\"createEmptyDoc()\" ng-if=\"showRegularButton\">Last ned tomt dokument</button><p id=\"downloadify\"></p>");
$templateCache.put("partials/views/start.html","<div ui-view><div class=\"hero-unit\"><h1 ng-bind=\"turTittel\" style=\"margin-bottom: 20px\"></h1><p ng-repeat=\"paragraf in infoVarslingsOmrade\" ng-bind=\"paragraf\" ng-class=\"{lead: $index == 0}\"></p><p class=\"lead\">Prøv deg på turplanlegging for {{turTittel}}.<br>Dette verktøyet gir deg muligheten til å planlegge en tur før du skal ut i fjellet.</p><p>Når du har fylt inn all nødvendig informasjon kan du printe ut et planleggingsskjema som du kan benytte senere. For å gå gjennom turplanleggingen skritt for skritt, trykker du på pilene nederst på siden.</p><p>Alternativt kan du utføre de forskjellige stegene i valgfri rekkefølge ved å bruke navigasjonen på toppen av siden.</p><a class=\"btn btn-large btn-primary pull-right\" ui-sref=\"info.skredvarsel\">God tur! <i class=\"icon-arrow-right icon-white\"></i></a><div class=\"clearfix\"></div></div></div>");
$templateCache.put("partials/views/info/alpine.farer.html","<p class=\"lead\">Ut i fra forholdene gitt i eksempelvarselet og annen info gjennom kart og rutebeskrivelser, hvilke andre alpine farer må man passe seg for når man er på tur på <span ng-bind=\"turTittel\"></span>? Er det for eksempel meldt mye vind i kombinasjon med lave temperaturer eller er det terrengformasjoner som kan være ekstra farlige?</p><div class=\"row\"><div class=\"span6\"><label class=\"checkbox\"><input type=\"checkbox\" ng-model=\"info.alpineFarer.svar.fall\"> Fall ned bratte fjellskrenter</label></div><div class=\"span6\"><label class=\"checkbox\"><input type=\"checkbox\" ng-model=\"info.alpineFarer.svar.bresprekker\"> Bresprekker</label></div></div><div class=\"row\"><div class=\"span6\"><label class=\"checkbox\"><input type=\"checkbox\" ng-model=\"info.alpineFarer.svar.skalver\"> Skavler</label></div><div class=\"span6\"><label class=\"checkbox\"><input type=\"checkbox\" ng-model=\"info.alpineFarer.svar.klipper\"> Klipper, steiner</label></div></div><div class=\"row\"><div class=\"span6\"><label class=\"checkbox\"><input type=\"checkbox\" ng-model=\"info.alpineFarer.svar.vindavkjoling\"> Kulde / vindavkjøling</label></div></div><nve-skred-footer alerts=\"alerts\" forrige=\"forrige\" neste=\"neste\"></nve-skred-footer>");
$templateCache.put("partials/views/info/info.html","<p ng-repeat=\"paragraf in infoVarslingsOmrade\" ng-bind=\"paragraf\" ng-class=\"{lead: $index == 0}\"></p><hr><a class=\"nve-btn blue arrow-right\" ui-sref=\"info.skredvarsel\">Gå videre</a>");
$templateCache.put("partials/views/info/info.meny.html","<ul class=\"nav nav-pills\"><li ui-sref-active=\"active\" nve-sub-menu-item=\"info.skredvarsel.item\"></li><li ui-sref-active=\"active\" nve-sub-menu-item=\"info.vaer.item\"></li><li ui-sref-active=\"active\" nve-sub-menu-item=\"info.alpineFarer.item\"></li></ul><div ui-view><h1>Loading</h1></div>");
$templateCache.put("partials/views/info/skredvarsel.html","<div class=\"row\"><div class=\"span7\"><p class=\"lead\">I et skredvarsel finner du viktig informasjon om den generelle skredfaren i området. Fyll inn informasjonen du finner i eksempelvarselet for å planlegge denne turen. Les mer om faregradene på varsom.no under <a href=\"http://www.varsom.no/Snoskred/Skredskolen/Om-faregradene1/\">snøskredfareskalaen</a>.</p></div><div class=\"span5\"><a class=\"nve-btn arrow-right\" target=\"nveSkredskoleVindu\" ng-href=\"{{skredvarselLink}}\">Klikk her for å hente eksempelvarselet</a></div></div><hr><div class=\"row\"><div class=\"span4\"><div nve-model=\"info.skredvarsel.svar.faregrad\" nve-skredproblem-boks=\"faregrader\"></div></div></div><hr><div class=\"row\"><div class=\"span3\"><h5>Skredproblem</h5><ul class=\"unstyled\"><li ng-repeat=\"(key, label) in info.labels.skredproblem\"><label class=\"radio\"><input type=\"radio\" ng-model=\"info.skredvarsel.svar.skredproblem\" ng-value=\"key\"> {{label}}</label></li></ul></div><div class=\"span3\"><h5>Årsak til skredfare</h5><ul class=\"unstyled\"><li ng-repeat=\"(key, label) in info.labels.snodekke\"><label class=\"checkbox\"><input type=\"checkbox\" ng-model=\"info.skredvarsel.svar[key]\"> {{label}}</label></li></ul></div><div class=\"span3\"><div nve-model=\"info.skredvarsel.svar.tilleggsbelastning\" nve-skredproblem-boks=\"tilleggsbelastning\"></div></div></div><div class=\"row\"><div class=\"span3\"><h5>Utsatte himmelretninger</h5><div nve-compass=\"{model: info.skredvarsel.svar}\"></div></div><div class=\"span3\"><h5>Utsatt høydenivå over/under:</h5><img src=\"/Templates/img/skredskole/info/hoyde.png\" alt=\"Utsatt høydenivå\"><div class=\"input-append\"><input class=\"span2\" type=\"number\" min=\"0\" step=\"100\" ng-model=\"info.skredvarsel.svar.hoydeniva\"> <span class=\"add-on\">m</span></div></div><div class=\"span3\"><div nve-model=\"info.skredvarsel.svar.skredstorrelse\" nve-skredproblem-boks=\"damageSize\"></div></div><div class=\"span3\"><div nve-model=\"info.skredvarsel.svar.sannsynlighet\" nve-skredproblem-boks=\"probability\"></div></div></div><nve-skred-footer alerts=\"alerts\" forrige=\"forrige\" neste=\"neste\"></nve-skred-footer>");
$templateCache.put("partials/views/info/vaer.html","<p class=\"lead\">Skredvarselet inneholder også viktig informasjon om værsituasjonen og hvordan den påvirker skredfaren.</p><div class=\"row\"><div class=\"span6\"><strong>Nedbør</strong><ul class=\"unstyled\"><li ng-repeat=\"item in nedborLabels\"><label class=\"checkbox\"><input type=\"checkbox\" ng-model=\"info.vaer.svar[item.key]\"> {{item.title}}</label></li></ul></div><div class=\"span6\"><strong>Sikt</strong><ul class=\"unstyled\"><li ng-repeat=\"item in siktLabels\"><label class=\"checkbox\"><input type=\"checkbox\" ng-model=\"info.vaer.svar[item.key]\"> {{item.title}}</label></li></ul></div></div><div class=\"row\"><div class=\"span6\"><strong>Vind</strong><ul class=\"unstyled\"><li ng-repeat=\"item in vindLabels\"><label class=\"checkbox\"><input type=\"checkbox\" ng-model=\"info.vaer.svar[item.key]\"> {{item.title}}</label></li></ul></div></div><nve-skred-footer alerts=\"alerts\" forrige=\"forrige\" neste=\"neste\"></nve-skred-footer>");
$templateCache.put("partials/views/nedkjoring/nedkjoring.html","<p class=\"lead\">Skal dere gå samme rute oppover som dere planlegger å kjøre ned?</p><div class=\"row\"><div class=\"span4\"><div class=\"row\"><div class=\"span4\"><label class=\"radio\"><input type=\"radio\" ng-model=\"kritiskeOmrader.nedkjoring.svar.sammeRute\" ng-value=\"\'Ja\'\"> Ja</label><label class=\"radio\"><input type=\"radio\" ng-model=\"kritiskeOmrader.nedkjoring.svar.sammeRute\" ng-value=\"\'Nei\'\"> Nei</label></div></div></div><div class=\"span8\"><img src=\"/Templates/img/skredskole/nedkjoring.jpg\"> <i>Eksempelbilde fra rett før nedkjøring. Sogndalsdalen i Sogn & Fjordane.</i></div></div><nve-skred-footer alerts=\"alerts\" custom-alerts=\"customAlerts()\" forrige=\"forrige\" neste=\"neste\"></nve-skred-footer>");
$templateCache.put("partials/views/nedkjoring/nedkjoring.meny.html","<ul class=\"nav nav-pills\"><li ui-sref-active=\"active\" nve-sub-menu-item=\"kritiskeOmrader.nedkjoring.item\"></li></ul><div ui-view><h1>Loading</h1></div>");
$templateCache.put("partials/views/kritiske-omrader/egenskaper.html","<h3>Kritiske områder</h3><div class=\"row\"><div class=\"span10\"><p><strong>Langs ruta opp til {{turTittel}} er det spesielt to kritiske områder man må vurdere ekstra nøye!</strong></p><p>Bestem først posisjonen til disse områdene, og deretter helning, høyde, eksposisjon og hva som kjennetegner de kritiske punktene.</p><p>OPPGAVE: Dra de to rundingene merket 1 og 2 inn i kartet for å angi kritiske områder</p></div><div class=\"span2\"><div class=\"text-center\" ng-mouseup=\"count = count + 1\" ng-init=\"count=0\" nve-draggable ng-show=\"showKritiskOmradeNr == -1\">1</div><div class=\"text-center\" ng-mouseup=\"count = count + 1\" nve-draggable ng-show=\"showKritiskOmradeNr == -1\">2</div></div></div><button type=\"button\" class=\"btn\" ng-click=\"togglePoints()\">Vis kritiske områder</button> <button type=\"button\" class=\"btn\" ng-click=\"showKritiskOmrade(1)\">Fyll inn for kritisk område 1</button> <button type=\"button\" class=\"btn\" ng-click=\"showKritiskOmrade(2)\">Fyll inn for kritisk område 2</button><div class=\"row\"><div class=\"span12\" ng-if=\"showKritiskOmradeNr == -1\"><img ng-src=\"{{bilder.kartMedLosning}}\" ng-if=\"!showPoints\"> <img ng-src=\"{{bilder.kartMedKritiskeOmrader}}\" ng-if=\"showPoints\"></div><div ng-if=\"showKritiskOmradeNr == 1\"><div class=\"span5\"><div class=\"well\"><h3>Kritisk område #1</h3><label><strong>Helning i grader:</strong></label><input type=\"number\" ng-model=\"kritiskeOmrader.egenskaper.svar.helning1\"><label><strong>Høyde i meter:</strong></label><input type=\"number\" ng-model=\"kritiskeOmrader.egenskaper.svar.hoyde1\"><h4>Himmelretning</h4><div nve-compass=\"{model: kritiskeOmrader.egenskaper.svar, keys: [\'n1\',\'no1\',\'o1\',\'so1\',\'s1\',\'sv1\',\'v1\',\'nv1\']}\"></div><p>Hva gjør dette punktet til et kritisk punkt? Les gjennom snøskredvarselet, ligger dette punktet innenfor det som er gitt som mest utsatt høydenivå og himmelretning?</p><ul class=\"unstyled\"><li ng-repeat=\"item in utsatteOmraderLabels\"><label class=\"checkbox\"><input type=\"checkbox\" ng-model=\"kritiskeOmrader.egenskaper.svar[item.key + \'1\']\">{{item.title}}</label></li></ul></div></div><div class=\"span7\"><img ng-src=\"{{bilder.kartKritiskOmrade1Zoom}}\"></div></div><div ng-if=\"showKritiskOmradeNr == 2\"><div class=\"span5\"><div class=\"well\"><h3>Kritisk område #2</h3><label><strong>Helning i grader:</strong></label><input type=\"number\" ng-model=\"kritiskeOmrader.egenskaper.svar[\'helning2\']\"><label><strong>Høyde i meter:</strong></label><input type=\"number\" ng-model=\"kritiskeOmrader.egenskaper.svar[\'hoyde2\']\"><h4>Himmelretning</h4><div nve-compass=\"{model: kritiskeOmrader.egenskaper.svar, keys: [\'n2\',\'no2\',\'o2\',\'so2\',\'s2\',\'sv2\',\'v2\',\'nv2\']}\"></div><p>Hva gjør dette punktet til et kritisk punkt? Les gjennom snøskredvarselet, ligger dette punktet innenfor det som er gitt som mest utsatt høydenivå og himmelretning?</p><ul class=\"unstyled\"><li ng-repeat=\"item in utsatteOmraderLabels\"><label class=\"checkbox\"><input type=\"checkbox\" ng-model=\"kritiskeOmrader.egenskaper.svar[item.key + \'2\']\">{{item.title}}</label></li></ul></div></div><div class=\"span7\"><img ng-src=\"{{bilder.kartKritiskOmrade2Zoom}}\"></div></div></div><nve-skred-footer alerts=\"alerts\" forrige=\"forrige\" neste=\"neste\"></nve-skred-footer>");
$templateCache.put("partials/views/kritiske-omrader/kritiske.omrader.meny.html","<ul class=\"nav nav-pills\"><li ui-sref-active=\"active\" nve-sub-menu-item=\"kritiskeOmrader.egenskaper.item\"></li></ul><div ui-view><h1>Loading</h1></div>");
$templateCache.put("partials/views/kritiske-omrader/nedkjoring.html","<p class=\"lead\">Skal dere gå samme rute oppover som dere planlegger å kjøre ned?</p><div class=\"row\"><div class=\"span4\"><div class=\"row\"><div class=\"span4\"><label class=\"radio\"><input type=\"radio\" ng-model=\"kritiskeOmrader.nedkjoring.svar.sammeRute\" ng-value=\"true\"> Ja</label><label class=\"radio\"><input type=\"radio\" ng-model=\"kritiskeOmrader.nedkjoring.svar.sammeRute\" ng-value=\"false\"> Nei</label></div></div></div><div class=\"span8\"><img src=\"/Templates/img/skredskole/nedkjoring.jpg\"> Eksempelbilde fra rett før nedkjøring i Sogndalsdalen i Sogn & Fjordane</div></div><nve-skred-footer alerts=\"alerts\" custom-alerts=\"customAlerts()\" forrige=\"forrige\" neste=\"neste\"></nve-skred-footer>");
$templateCache.put("partials/views/rute/distanse.html","<p class=\"lead\">Finn den omtrentlige horisontale distansen ved bruk av målestokken og skriv deretter inn omtrentlig høydeforskjell mellom start og slutt. Oppgis i meter, rund av til nærmeste hundre meter.</p><div class=\"row\"><div class=\"span8\"><img ng-src=\"{{bilder.kartMedLosning}}\"></div><div class=\"span4\"><div><label>Horisontal distanse <input type=\"number\" min=\"0\" step=\"100\" ng-model=\"rute.distanse.svar.lengde\" placeholder=\"Horisontal distanse\"></label></div><hr><div><label>Høydeforskjell <input type=\"number\" min=\"0\" step=\"100\" ng-model=\"rute.distanse.svar.hoyde\" placeholder=\"Høydeforskjell\"></label></div></div></div><nve-skred-footer alerts=\"alerts\" forrige=\"forrige\" neste=\"neste\"></nve-skred-footer>");
$templateCache.put("partials/views/rute/rute.meny.html","<ul class=\"nav nav-pills\"><li ui-sref-active=\"active\" nve-sub-menu-item=\"rute.rutevalg.item\"></li><li ui-sref-active=\"active\" nve-sub-menu-item=\"rute.distanse.item\"></li><li ui-sref-active=\"active\" nve-sub-menu-item=\"rute.tidsplan.item\"></li></ul><div ui-view></div>");
$templateCache.put("partials/views/rute/rutevalg.html","<p ng-bind=\"ruteTekst\"></p><nve-canvas settings=\"settings\" question=\"bilder.kart\" solution=\"bilder.kartMedLosning\" ng-click=\"rutevalgDone()\"></nve-canvas><div class=\"alert alert-info\">Kart kan forstørres opp og ned ved å holde inne Ctrl-knappen og trykke + eller - (Cmd på Mac)</div><nve-skred-footer alerts=\"alerts\" custom-alerts=\"customAlerts()\" forrige=\"forrige\" neste=\"neste\"></nve-skred-footer>");
$templateCache.put("partials/views/rute/tidsplan.html","<p class=\"lead\">Bruk følgende opplysninger for å beregne den totale turtiden for {{turTittel}} ({{hoydeMeter}} høydemeter). Oppgi i hele og halve timer, f.eks 2 timer opp og 0.5 timer ned.</p><div class=\"row\"><div class=\"span4\"><label><strong>Oppstigning:</strong> 300 hm per time<br><input type=\"number\" min=\"0\" ng-model=\"rute.tidsplan.svar.oppstigning\" style=\"width:5em\"> timer</label></div><div class=\"span4\"><label><strong>Nedfart:</strong> 1/3 av tiden opp<br><input type=\"number\" step=\"0.5\" min=\"0\" ng-model=\"rute.tidsplan.svar.nedfart\" style=\"width:5em\"> timer</label></div><div class=\"span4\"><div class=\"alert alert-info\"><strong>Husk</strong> å beregne tid til matpauser, klesskifte osv. Beregn i hvert fall en halvtime til pauser.</div></div></div><div class=\"row\"><div class=\"span4\"></div><div class=\"span4\"><strong>Total tid (med halvtimes pause):</strong> {{rute.tidsplan.svar.oppstigning + rute.tidsplan.svar.nedfart + rute.tidsplan.svar.pause}} timer</div><div class=\"span4\"></div></div><hr><div class=\"row\"><div class=\"span8\"><strong>Krever situasjonen at man starter turen på et spesielt tidspunkt (f.eks. tidlig morgen pga. sterk sol eller værmeldingen)</strong></div><div class=\"span4\"><ul class=\"unstyled\"><li><label class=\"radio\"><input type=\"radio\" ng-model=\"rute.tidsplan.svar.spesifikkStart\" ng-value=\"true\"> Ja</label></li><li><label class=\"radio\"><input type=\"radio\" ng-model=\"rute.tidsplan.svar.spesifikkStart\" ng-value=\"false\"> Nei</label></li></ul></div></div><nve-skred-footer alerts=\"alerts\" forrige=\"forrige\" neste=\"neste\"></nve-skred-footer>");
$templateCache.put("partials/views/utstyr/deltakere.html","<div class=\"row\"><div class=\"span4\"><div class=\"row\"><div class=\"span4\"><label for=\"gruppeStorrelse\"><strong>Hvor stor er gruppa som skal på tur?</strong></label><div class=\"input-append\"><input class=\"span2\" id=\"gruppeStorrelse\" min=\"0\" type=\"number\" ng-model=\"utstyr.deltakere.svar.gruppeStorrelse\"> <span class=\"add-on\">Personer</span></div></div></div><div class=\"row\"><div class=\"span4\"><h5>Hvor mye erfaring har dere i å gå på topptur?</h5><label class=\"radio\"><input type=\"radio\" ng-model=\"utstyr.deltakere.svar.erfaring\" value=\"1\"> Lite erfaring (0 - 10 turer)</label><label class=\"radio\"><input type=\"radio\" ng-model=\"utstyr.deltakere.svar.erfaring\" value=\"2\"> Noe erfaring (10 - 30 turer)</label><label class=\"radio\"><input type=\"radio\" ng-model=\"utstyr.deltakere.svar.erfaring\" value=\"3\"> Erfarne (over 30 turer)</label></div></div><div class=\"row\"><div class=\"span4\"><h5>Hvordan er motivasjonen i gruppa før turen?</h5><label class=\"radio\"><input type=\"radio\" ng-model=\"utstyr.deltakere.svar.motivasjon\" value=\"1\"> Tilbakeholden</label><label class=\"radio\"><input type=\"radio\" ng-model=\"utstyr.deltakere.svar.motivasjon\" value=\"2\"> Behersket / realistisk</label><label class=\"radio\"><input type=\"radio\" ng-model=\"utstyr.deltakere.svar.motivasjon\" value=\"3\"> Ambisiøs</label></div></div></div><div class=\"span8\"><img src=\"/Templates/img/skredskole/utstyr/deltakere.JPG\"></div></div><nve-skred-footer alerts=\"alerts\" custom-alerts=\"customAlerts()\" forrige=\"forrige\" neste=\"neste\"></nve-skred-footer>");
$templateCache.put("partials/views/utstyr/list.html","<div class=\"row\"><div class=\"span6\"><div class=\"row\"><div class=\"span6\"><p class=\"lead\">Sjekk om dere har alt av nødvendig utstyr!</p></div></div><div class=\"row\"><div class=\"span6\"><strong>Alle turdeltakere</strong><ul class=\"unstyled\"><li ng-repeat=\"item in alleTurDeltakereLabels\"><label class=\"checkbox\"><input type=\"checkbox\" ng-model=\"utstyr.list.svar[item.key]\"> {{item.title}}</label></li></ul></div></div><div class=\"row\"><div class=\"span6\"><strong>Tilleggsutstyr</strong><ul class=\"unstyled\"><li ng-repeat=\"item in tilleggsUtstyrLabels\"><label class=\"checkbox\"><input type=\"checkbox\" ng-model=\"utstyr.list.svar[item.key]\"> {{item.title}}</label></li></ul></div></div><div class=\"row\"><div class=\"span6\"><strong>Annet</strong><ul class=\"unstyled\"><li ng-repeat=\"item in annetLabels\"><label class=\"checkbox\"><input type=\"checkbox\" ng-model=\"utstyr.list.svar[item.key]\"> {{item.title}}</label></li></ul></div></div></div><div class=\"span6\"><img src=\"/Templates/img/skredskole/utstyr/oversikt.jpg\"></div></div><nve-skred-footer alerts=\"alerts\" forrige=\"forrige\" neste=\"neste\"></nve-skred-footer>");
$templateCache.put("partials/views/utstyr/utstyr.meny.html","<ul class=\"nav nav-pills\"><li ui-sref-active=\"active\" nve-sub-menu-item=\"utstyr.list.item\"></li><li ui-sref-active=\"active\" nve-sub-menu-item=\"utstyr.deltakere.item\"></li></ul><div ui-view></div>");}]);