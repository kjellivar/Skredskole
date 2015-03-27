skredskoleAngularApp.directive('nveCanvas', function (BASE_URL) {
    return {
        restrict: 'E',
        templateUrl: BASE_URL + 'partials/directives/nveCanvas.html',
        scope: {
            settings: '=',
            question: '=',
            solution: '='
        },
        link: function ($scope, $element) {

            var canvas = $element.find("canvas")[0],
                solutionState = false;

            var canvasBg = {
                question: { 'background-image': 'url(' + $scope.question + ')' },
                solution: { 'background-image': 'url(' + $scope.solution + ')' }
            };

            // Init settings
            $scope.canvasWidth = $element.parent().width();
            $scope.canvasHeight = $scope.canvasWidth * 0.7;
            $scope.toggleSolutionText = "Vis rute";
            $scope.canvasbg = canvasBg.question;

            // Toggle visibility of solution
            $scope.toggleSolution = function () {
                solutionState = !solutionState;
                if(solutionState) {
                    $scope.toggleSolutionText = "Skjul rute";
                    $scope.canvasbg = canvasBg.solution;
                } else {
                    $scope.toggleSolutionText = "Vis rute";
                    $scope.canvasbg = canvasBg.question;
                }
            };

            var ctx     = canvas.getContext('2d'),  // Set canvas context
                drawing = false,                    // variable that decides if something should be drawn on mousemove
                lastX, lastY;                       // the last coordinates before the current move

            angular.element(canvas).bind('mousedown', function(event) {

                var pos = getPointerCoordinates(event);
                lastX = pos.x;
                lastY = pos.y;

                //console.log('Drawing like a boss', lastX, lastY, event, ctx);

                drawing = true;     // Now we're drawing
            });
            angular.element(canvas).bind('mousemove', function(event) {
                if(drawing){
                    // get current mouse position
                    var newPos = getPointerCoordinates(event);

                    draw(lastX, lastY, newPos.x, newPos.y);

                    // set current coordinates to last one
                    lastX = newPos.x;
                    lastY = newPos.y;
                }
            });
            angular.element(canvas).bind('mouseup', function(event) {
                drawing = false; // stop drawing
            });

            function draw(lX, lY, cX, cY){
                ctx.beginPath();    // begins new line
                ctx.moveTo(lX,lY);  // line from
                ctx.lineTo(cX,cY);  // to
                ctx.strokeStyle = $scope.settings.color; // with these settings
                ctx.lineWidth = $scope.settings.lineWidth;
                ctx.closePath();
                ctx.stroke();       // draw it
            }

            function getPointerCoordinates(event){
                var coords = {};
                if(event.offsetX!==undefined){
                    coords.x = event.offsetX;
                    coords.y = event.offsetY;
                } else {
                    coords.x = event.originalEvent.layerX;
                    coords.y = event.originalEvent.layerY;
                }
                return coords;
            }

            // Clear Canvas
            $scope.clearCanvas = function () {
                ctx.clearRect(0, 0, $scope.canvasWidth, $scope.canvasHeight);
            };
        }
    };
});