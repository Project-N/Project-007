if (Meteor.isClient) {
    $(document).ready(function() {
        if (typeof navigator == 'undefined') {
            console.log('Error!');
        } else {
            navigator.geolocation.getCurrentPosition(function(position) {
                console.log(position.coords.latitude + ' ' + position.coords.longitude + ' ' + position.coords.accuracy);
            }, function(error) {
                alert('Error occurred. Error code: ' + error.code);
                // error.code can be:
                //   0: unknown error
                //   1: permission denied
                //   2: position unavailable (error response from locaton provider)
                //   3: timed out
            });
            setInterval(getLocation,500);

          
        }
    });
    function getLocation() {
        var position = Geolocation.currentLocation();
        if (!(typeof position == 'undefined' || position === null)) {
            document.getElementById('currentLat').innerHTML = position.coords.latitude.toString();
            document.getElementById('currentLong').innerHTML = position.coords.longitude.toString();
        }
    }
}