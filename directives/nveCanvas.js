myapp.directive('nveCanvas', function($log, $timeout) {
  return {
    restrict: 'E',
    templateUrl: 'partials/directives/nveCanvas.html',
    scope: {
        settings: '=',
        colors: '='
      },
    transclude: true,
    controller: function($scope, $element, $attrs, $transclude, $window) {

      $scope.task = {};
      $scope.canvas = {};
      $scope.canvasContext = {};
      $scope.canvasWidth = $element.parent().width();
      $scope.canvasHeight = $scope.canvasWidth * 0.7;
      var scale = $scope.canvasWidth / 1170;
 
      this.setTask = function(task) {
        $scope.task = task;
      };
      
      this.setCanvas = function(canvas) {

        $scope.canvas = canvas;
      };
      
      this.setCanvasContext = function(context) {
        $scope.canvasContext = context;
        //Hack for displaying after load
        $timeout(function () {
            $scope.canvasContext.lineWidth = $scope.settings.lineWidth;
            $scope.clearCanvas();
        }, 500);
      };
      
      $scope.clearCanvas = function () {
        $log.info("Clearing canvas");
        $scope.canvasContext.save();
        $scope.canvasContext.scale(scale, scale);
        $scope.canvasContext.drawImage($scope.task.questionImg,0,0);
        $scope.canvasContext.restore();
      };
      
      $scope.showSolution = function () {
        $log.info("Showing solution");
        $scope.canvasContext.save();
        $scope.canvasContext.scale(scale, scale);
        $scope.canvasContext.drawImage($scope.task.solutionImg,0,0);
        $scope.canvasContext.restore();
      };
      
      $scope.changeColor = function(color) {
        $scope.settings.color = color;
      };
    }
  };
})
.directive('nveTask', function($log) {
  return {
    require: '^nveCanvas',
    restrict: 'E',
    templateUrl: 'partials/directives/nveTask.html',
    scope: {
        question: '@',
        solution: '@'
      },
    link: function($scope, $element, $attrs, $nveCanvasCtrl) {
      $scope.questionImg = $element.find('img')[0];
      $scope.solutionImg = $element.find('img')[1];
      
      $log.log("Setting task");
      $nveCanvasCtrl.setTask($scope);
    }
  };
})
.directive('nveDrawableCanvas', function($document, $log) {
    return {
      require: '^nveCanvas',
      link: function(scope, element, attrs, nveCanvasCtrl) {
        var cb_ctx = null,
            cb_lastPoints = [],
            cb_canvas = element[0];
        
        $log.log("Setting canvas");
        nveCanvasCtrl.setCanvas(cb_canvas);
  
        // Draw a line on the canvas from (s)tart to (e)nd
        function drawLine(sX, sY, eX, eY) {
            cb_ctx.moveTo(sX, sY);
            cb_ctx.lineTo(eX, eY);
            return { x: eX, y: eY };
        }
  
        // Get the coordinates for a mouse or touch event
        function getCoords(e) {
            var returnValue;
            if (e.offsetX) {
                returnValue = { x: e.offsetX, y: e.offsetY };
            } else if (e.layerX) {
                returnValue = { x: e.layerX, y: e.layerY };
            } else {
                returnValue = { x: e.pageX - cb_canvas.offsetLeft, y: e.pageY - cb_canvas.offsetTop };
            }
            return returnValue;
        }
  
        function drawMouse(e) {
            var i, p;
            if (e.touches) {
                // Touch Enabled
                for (i = 1; i <= e.touches.length; i += 1) {
                    p = getCoords(e.touches[i - 1]); // Get info for finger i
                    cb_lastPoints[i] = drawLine(cb_lastPoints[i].x, cb_lastPoints[i].y, p.x, p.y);
                }
            } else {
                // Not touch enabled
                p = getCoords(e);
                cb_lastPoints[0] = drawLine(cb_lastPoints[0].x, cb_lastPoints[0].y, p.x, p.y);
            }
            cb_ctx.stroke();
            cb_ctx.closePath();
            cb_ctx.beginPath();
  
            return false;
        }
  
        function startDraw(e) {
            var i;
            cb_ctx.strokeStyle = scope.settings.color;
            if (e.touches) {
                // Touch event
                for (i = 1; i <= e.touches.length; i += 1) {
                    cb_lastPoints[i] = getCoords(e.touches[i - 1]); // Get info for finger #1
                }
            } else {
                // Mouse event
                cb_lastPoints[0] = getCoords(e);
                cb_canvas.onmousemove = drawMouse;
            }
  
            return false;
        }
  
        // Called whenever cursor position changes after drawing has started
        function stopDraw(e) {
            e.preventDefault();
            cb_canvas.onmousemove = null;
        }
  
        function init() {
  
            if (cb_canvas.getContext) {
                cb_ctx = cb_canvas.getContext('2d');
                cb_ctx.lineWidth = scope.settings.lineWidth;
                cb_ctx.strokeStyle = scope.settings.color;
                cb_ctx.beginPath();
                $log.log("Setting context");
                nveCanvasCtrl.setCanvasContext(cb_ctx);
  
                cb_canvas.onmousedown = startDraw;
                cb_canvas.onmouseup = stopDraw;
                cb_canvas.ontouchstart = startDraw;
                cb_canvas.ontouchstop = stopDraw;
                cb_canvas.ontouchmove = drawMouse;
                
            }
        }
        init();
      }
    }
  });