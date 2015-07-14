var onSwipeDetect = (function() {
    var threshold = 150,
        errorMargin = 50,
        allowedTime = 500,
        startX, 
        startY, 
        startTime,
        element, 
        swipeHandler;

    function onTouchStart(e) 
    {
        e.preventDefault();
        startTime = new Date().getTime();
        var touchobj = e.changedTouches[0];
        startX = touchobj.pageX;
        startY = touchobj.pageY;
    }

    function onTouchMove(e) 
    {
        e.preventDefault();
    }

    function onTouchEnd(e) 
    {
        var touchobj = e.changedTouches[0];
        var dist_x = touchobj.pageX - startX;
        var dist_y = touchobj.pageY - startY;
        var elapsed_time = new Date().getTime() - startTime;
        var swipedir = "none";
        if (elapsed_time <= allowedTime) 
        {
            if (Math.abs(dist_x) >= threshold && Math.abs(dist_y) <= errorMargin)
            {
                swipedir = dist_x > 0 ? 39 : 37;
            } 
            else if (Math.abs(dist_y) >= threshold && Math.abs(dist_x) <= errorMargin) 
            {
                swipedir = dist_y > 0 ? 40 : 38;
            }
        }
        if (swipedir !== 'none') 
        {
            swipeHandler(swipedir);
        }
    }
    return {
        init: function(id, onswipedetect) 
        {
            el = document.getElementById(id);
            swipeHandler = onswipedetect;
            el.addEventListener('touchstart', onTouchStart);
            el.addEventListener('touchmove', onTouchMove);
            el.addEventListener('touchend', onTouchEnd);
        }
    };
})();