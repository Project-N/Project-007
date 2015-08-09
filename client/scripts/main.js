$(document).ready(function() {
        //window.scrollTo(0,1);
        //window.navigator.standalone = true;
        setInterval(updatePosition,500);
        //setInterval(checkOnline,500);
        document.ontouchmove = function(e) {if (!event.elementIsEnabled)
        event.preventDefault();
};
        //$.nonbounce();
        document.getElementById("menu").ontouchmove = enableOnTouchMove;

        Session.set("open",false);

    var id = Math.random().toString(36).substring(2);
    Session.set('id', id);
    Session.set('zoom',0.5);
    Session.set('scale',1);
    Session.set('rotation',0);
    Session.set('previousRotation',0);
    Session.set("offsetx", 0);
    Session.set("offsety", 0);
    Session.set("previousoffsetx", 0);
    Session.set("previousoffsety", 0);
    Session.set("locked", true);
    Meteor.call('newPlayer', id, 0, 0, 0, 0, 0, 0);
    updatePosition();
    var hammertime = new Hammer(document.getElementById("wrapper"));
    hammertime.get('pinch').set({ enable: true });
    hammertime.get('rotate').set({ enable: true });
    hammertime.get('pan').set({ enable: true });
    hammertime.get('pan').set({direction: Hammer.DIRECTION_ALL})
    hammertime.on('pinch', function(ev) {
        Session.set('zoom', Session.get('zoom') * (((ev.scale-1)/20)+1));
    });
    hammertime.on('rotatemove', function(ev) {
        Session.set('rotation', Session.get('previousRotation') + ev.rotation);
    });
    hammertime.on('rotateend', function(ev){
        Session.set('previousRotation', Session.get('rotation'));
    });
    hammertime.on('panmove',function(ev){
        Session.set('offsetx', Session.get('previousoffsetx')+ev.deltaX);
        Session.set('offsety', Session.get('previousoffsety')+ev.deltaY);
    });
    hammertime.on('panend', function(ev){
        Session.set('previousoffsetx', Session.get('offsetx'));
        Session.set('previousoffsety', Session.get('offsety'));
    });
    //setTimeout(hammersetup,2000);
//$('#wrapper').bind('touchy-pinch', onZoom);
      
});
$(window).bind('beforeunload', function(){
  Meteor.call('removePlayer',Session.get('id'));
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

/*onZoom = function(event, phase, $target, data){
    alert("hi");
    Session.set('zoom',Session.get('zoom')*data.scale/data.previousScale);
}*/
/*getLocation = function() {
    var position;
    navigator.geolocation.getCurrentPosition(function(pos) {
        //document.getElementById('currentLat').innerHTML = position.coords.latitude.toString();
        //document.getElementById('currentLong').innerHTML = position.coords.longitude.toString();
        position = pos;
        console.log(position);
    }, function(error) {
        //alert('Error occurred. Error code: ' + error.code);
        if(error.code == 1){
            alert("Please turn on Location Services and GPS, and allow your app to use them.");
        }
        if(error.code == 2){
            //Location unavailable - you go into gray mode.
        }
        // error.code can be:
        //   0: unknown error
        //   1: permission denied
        //   2: position unavailable (error response from location provider)
        //   3: timed out
    },{enableHighAccuracy:true,maximumAge:0});
    return position;
}*/
updatePosition = function() {
    navigator.geolocation.getCurrentPosition(function(position) {
        Session.set("locationerr", false);
        setPosition(position.coords.latitude, position.coords.longitude, position.coords.speed, position.coords.heading, position.coords.accuracy);
    }, function(error) {
        //alert('Error occurred. Error code: ' + error.code);
        if(error.code == 1){
            alert("Please turn on Location Services and GPS, and allow your app to use them.");
        }
        if(error.code == 2){
            Session.set("locationerr", true);
        }
        // error.code can be:
        //   0: unknown error
        //   1: permission denied
        //   2: position unavailable (error response from location provider)
        //   3: timed out
    },{enableHighAccuracy:true,maximumAge:0});
    return 'Location set.';
}
setPosition = function(lat, long, speed, heading, accuracy) {
    Meteor.call('updatePlayer', Session.get('id'), lat, long, speed, heading, accuracy);
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
        for(i in Players.find().fetch()){
            if(!!document.getElementById(i._id)){
                //object was found.
                //MODIFY X AND Y
            }
            else{
                //PLACE NEW OBJECT ONTO MAP AT X AND Y
            }
        }
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
    function getx(yourlat,yourlng,lat,lng){
        return (window.innerWidth/2) + (distance(yourlat,yourlng,yourlat,lng)*Session.get("zoom"));
    }
    function gety(yourlat,yourlng,lat,lng){
        return ((window.innerHeight-144)/2) + (distance(yourlat,yourlng,lat,yourlng)*Session.get("zoom"));
    }
