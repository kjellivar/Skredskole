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
                if(event.offsetX!==undefined){
                    lastX = event.offsetX;
                    lastY = event.offsetY;
                } else {
                    lastX = event.layerX - event.currentTarget.offsetLeft;
                    lastY = event.layerY - event.currentTarget.offsetTop;
                }

                ctx.beginPath();    // begins new line
                drawing = true;     // Now we're drawing
            });
            angular.element(canvas).bind('mousemove', function(event) {
                if(drawing){
                    // get current mouse position
                    if(event.offsetX!==undefined){
                        currentX = event.offsetX;
                        currentY = event.offsetY;
                    } else {
                        currentX = event.layerX - event.currentTarget.offsetLeft;
                        currentY = event.layerY - event.currentTarget.offsetTop;
                    }

                    draw(lastX, lastY, currentX, currentY);

                    // set current coordinates to last one
                    lastX = currentX;
                    lastY = currentY;
                }
            });
            angular.element(canvas).bind('mouseup', function(event) {
                drawing = false; // stop drawing
            });

            function draw(lX, lY, cX, cY){
                ctx.moveTo(lX,lY);  // line from
                ctx.lineTo(cX,cY);  // to
                ctx.strokeStyle = $scope.settings.color; // with these settings
                ctx.lineWidth = $scope.settings.lineWidth;
                ctx.stroke();       // draw it
            }

            // Clear Canvas
            $scope.clearCanvas = function () {
                ctx.clearRect(0, 0, $scope.canvasWidth, $scope.canvasHeight);
            };
        }
    };
});