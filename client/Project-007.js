if (Meteor.isClient) {
    $(document).ready(function() {
            
            setInterval(getLocation,500);

          
        
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
                //   2: position unavailable (error response from locaton provider)
                //   3: timed out
            },{enableHighAccuracy:true,maximumAge:0});
        navigator.geolocation.getCurrentPosition(function(position) {
                document.getElementById('currentLat2').innerHTML = position.coords.latitude.toString();
            document.getElementById('currentLong2').innerHTML = position.coords.longitude.toString();
            }, function(error) {
                alert('Error occurred. Error code: ' + error.code);
                // error.code can be:
                //   0: unknown error
                //   1: permission denied
                //   2: position unavailable (error response from locaton provider)
                //   3: timed out
            },{enableHighAccuracy:false,maximumAge:0});
        //if (!(typeof position == 'undefined' || position === null)) {
        //    document.getElementById('currentLat').innerHTML = position.coords.latitude.toString();
        //    document.getElementById('currentLong').innerHTML = position.coords.longitude.toString();
        //}
    }
}