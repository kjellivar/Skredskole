skredskoleAngularApp.directive('nveDraggable', function($document) {
    return function(scope, element, attr) {
      var startX = 0, startY = 0, x = 0, y = 0;
 
      element.css({
       position: 'relative',
       border: '2px solid red',
       borderRadius: '50%',
       width: '25px',
       height: '25px',
       //backgroundColor: 'lightgrey',
       cursor: 'pointer'
      });
 
      element.on('mousedown', function(event) {
        // Prevent default dragging of selected content
        event.preventDefault();
        
        startX = event.pageX - x;
        startY = event.pageY - y;
        
        $document.on('mousemove', mousemove);
        $document.on('mouseup', mouseup);
      });
      
      element.on('touchstart', function(event) {
        // Prevent default dragging of selected content
        event.preventDefault();
        
        var p = getCoords(event.touches[0]);
        
        startX = p.x - x;
        startY = p.y - y;
        
        element.on('touchmove', mousemove);
        element.on('touchstop', touchstop);
      });
      
      // Get the coordinates for a mouse or touch event
        function getCoords(e) {
            var returnValue;
            if (e.offsetX) {
                returnValue = { x: e.offsetX, y: e.offsetY };
            } else if (e.layerX) {
                returnValue = { x: e.layerX, y: e.layerY };
            } else {
                returnValue = { x: e.pageX, y: e.pageY };
            }
            return returnValue;
        }
 
      function mousemove(event) {
        var p;
        if(event.touches){
          p = getCoords(event.touches[0]);
          x = p.x - startX;
          y = p.y - startY;
        } else {
          y = event.pageY - startY;
          x = event.pageX - startX;
        }
        
        element.css({
          top: y + 'px',
          left:  x + 'px'
        });
      }
 
      function mouseup() {
        $document.unbind('mousemove', mousemove);
        $document.unbind('mouseup', mouseup);
      }
      
      function touchstop() {
        element.unbind('touchmove', mousemove);
        element.unbind('touchstop', mouseup);
      }
    }
  });