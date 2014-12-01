var skredskoleAngularApp = angular.module('skredskoleAngularApp', ["ui.router"]);


skredskoleAngularApp.config(function ($stateProvider, $urlRouterProvider, BASE_URL) {

    // For any unmatched url, send to /route1
    $urlRouterProvider.otherwise("/start");

    $stateProvider
        .state('start', {
            url: "/start",
            templateUrl: BASE_URL + "partials/views/start.html",
            controller: "startCtrl"
        })
        .state('info', {
            url: "/forberedelse",
            templateUrl: BASE_URL + "partials/views/info/info.meny.html",
            controller: function ($scope, Info) {
                $scope.info = Info;
            }
        })
        .state('info.info', {
            url: "/info",
            templateUrl: BASE_URL + "partials/views/info/info.html",
            controller: "infoInfoCtrl"
        })
        .state('info.skredvarsel', {
            url: "/skredvarsel",
            templateUrl: BASE_URL + "partials/views/info/skredvarsel.html",
            controller: "infoSkredvarselCtrl"
        })
        .state('info.vaer', {
            url: "/vaer",
            templateUrl: BASE_URL + "partials/views/info/vaer.html",
            controller: "infoVaerCtrl"
        })
        .state('info.alpineFarer', {
            url: "/alpine-farer",
            templateUrl: BASE_URL + "partials/views/info/alpine.farer.html",
            controller: "infoAlpineFarerCtrl"
        })

        .state('utstyr', {
            url: "/turgruppe",
            templateUrl: BASE_URL + "partials/views/utstyr/utstyr.meny.html",
            controller: function ($scope, Utstyr) {
                $scope.utstyr = Utstyr;
            }
        })
        .state('utstyr.list', {
            url: "/list",
            templateUrl: BASE_URL + "partials/views/utstyr/list.html",
            controller: "utstyrListCtrl"
        })
        .state('utstyr.deltakere', {
            url: "/deltakere",
            templateUrl: BASE_URL + "partials/views/utstyr/deltakere.html",
            controller: "utstyrDeltakereCtrl"
        })

        .state('rute', {
            url: "/rute",
            templateUrl: BASE_URL + "partials/views/rute/rute.meny.html",
            controller: function ($scope, Rute) {
                $scope.rute = Rute;
            }
        })
        .state('rute.rutevalg', {
            url: "/rutevalg",
            templateUrl: BASE_URL + "partials/views/rute/rutevalg.html",
            controller: "ruteRutevalgCtrl"
        })
        .state('rute.distanse', {
            url: "/distanse",
            templateUrl: BASE_URL + "partials/views/rute/distanse.html",
            controller: "ruteDistanseCtrl"
        })
        .state('rute.tidsplan', {
            url: "/tidsplan",
            templateUrl: BASE_URL + "partials/views/rute/tidsplan.html",
            controller: "ruteTidsplanCtrl"
        })


        .state('kritiskeOmrader', {
            url: "/kritiske-omrader",
            templateUrl: BASE_URL + "partials/views/kritiske-omrader/kritiske.omrader.meny.html",
            controller: function ($scope, KritiskeOmrader) {
                $scope.kritiskeOmrader = KritiskeOmrader;
            }
        })
        .state('kritiskeOmrader.egenskaper', {
            url: "/detaljer",
            templateUrl: BASE_URL + "partials/views/kritiske-omrader/egenskaper.html",
            controller: "kritiskeOmraderEgenskaperCtrl"
        })
        .state('nedkjoring', {
            url: "/nedkjoring",
            templateUrl: BASE_URL + "partials/views/nedkjoring/nedkjoring.meny.html",
            controller: function ($scope, Nedkjoring) {
                $scope.kritiskeOmrader = Nedkjoring;
                console.log(Nedkjoring);
            }
        })
        .state('nedkjoring.nedkjoring', {
            url: "/nedkjoring",
            templateUrl: BASE_URL + "partials/views/nedkjoring/nedkjoring.html",
            controller: "nedkjoringCtrl"
        })

        .state('planleggingsskjema', {
            url: "/planleggingsskjema",
            templateUrl: BASE_URL + "partials/views/planleggingsskjema.html",
            controller: "planleggingsskjemaCtrl"
        });

});
