if (Meteor.isClient) {
    $(document).ready(function() {
            //window.scrollTo(0,1);
            //window.navigator.standalone = true;
            //setInterval(getLocation,500);
            //setInterval(checkOnline,500);
            document.ontouchmove = function(e) {if (!event.elementIsEnabled)
            event.preventDefault();
};
            //$.nonbounce();
            document.getElementById("menu").ontouchmove = enableOnTouchMove;
   
            Session.set("open",false);


    });
window.requestAnimFrame = function(){
    return (
        window.requestAnimationFrame       || 
        window.webkitRequestAnimationFrame || 
        window.mozRequestAnimationFrame    || 
        window.oRequestAnimationFrame      || 
        window.msRequestAnimationFrame     || 
        function(/* function */ callback){
            window.setTimeout(callback, 1000 / 60);
        }
    );
}();
    function getLocation() {
        navigator.geolocation.getCurrentPosition(function(position) {
            document.getElementById('currentLat').innerHTML = position.coords.latitude.toString();
            document.getElementById('currentLong').innerHTML = position.coords.longitude.toString();
        }, function(error) {
            alert('Error occurred. Error code: ' + error.code);
            // error.code can be:
            //   0: unknown error
            //   1: permission denied
            //   2: position unavailable (error response from location provider)
            //   3: timed out
        },{enableHighAccuracy:true,maximumAge:0});
    }
    function checkOnline(){
        try{
        var myRequest = new XMLHttpRequest();
        myRequest.open('get',window.location.href,false);
        myRequest.send();
        }
        catch(err){
            console.log("Offline");
        }
    }
    function enableOnTouchMove(event) {
      event.elementIsEnabled = true;
    };
    function renderthread(){
        requestAnimFrame(renderthread);
    }
    function distance(lat1, lng1, lat2, lng2) {
    earthRadius = 6371000; //meters
    dLat = toRadians(lat2-lat1);
    dLng = toRadians(lng2-lng1);
    a = Math.sin(dLat/2) * Math.sin(dLat/2) + Math.cos(toRadians(lat1)) * Math.cos(toRadians(lat2)) * Math.sin(dLng/2) * Math.sin(dLng/2);
    c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    dist = (float) (earthRadius * c);

    return dist;
    }
    function toRadians(value){
        return value * (Math.PI /180);
    }

}