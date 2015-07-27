if (Meteor.isClient) {
    $(document).ready(function() {
            //window.scrollTo(0,1);
            //window.navigator.standalone = true;
            //setInterval(getLocation,500);
            //setInterval(checkOnline,500);
            document.ontouchmove = function(e) {e.preventDefault()};
    });

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
}