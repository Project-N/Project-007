/**
 * Created by Cayden on 8/1/2015.
 */
Template.menubutton.events({
    'click a': function(event) {
        /*if(document.getElementById("menu").style.visibility == "hidden"){
        	document.getElementById("menu").style.visibility = "visible";
        }
        else{
        	document.getElementById("menu").style.visibility = "hidden";
        }*/
        /*if(document.getElementById("topbar").style.visibility == "hidden"){
        	document.getElementById("topbar").style.visibility = "visible";
        }
        else{
        	document.getElementById("topbar").style.visibility = "hidden";
        }*/
        /*if(document.getElementById("bottombar").style.visibility == "hidden"){
        	document.getElementById("bottombar").style.visibility = "visible";
        }
        else{
        	document.getElementById("bottombar").style.visibility = "hidden";
        }*/
        if(Session.get("open") == false || document.getElementById("menu").style.left == "-100%"){
        	document.getElementById("menu").style.left = "0px";
            document.getElementById("bottombar").style.bottom = "-72px";
        	Session.set("open",true);
        }
        else{
        	document.getElementById("menu").style.left = "-100%";
            document.getElementById("bottombar").style.bottom = "0px";
        	Session.set("open",false);
        }
    }
});
Template.viewbutton.events({
    'click a': function(event) {
        if(Session.get('locked')==true){
        Session.set('lastPos',{'lat':Players.findOne({id: Session.get('id')}).position.latitude,'long':Players.findOne({id: Session.get('id')}).position.longitude});
        Session.set('offsetx',0);
        Session.set('offsety',0);
        Session.set("previousoffsetx", 0);
        Session.set("previousoffsety", 0);
        Session.set('locked',false);
    }
        else{
        Session.set('rotation',0);
        Session.set('previousRotation',0);
        Session.set('locked',true);
    }
    }
});
Template.waypointbutton.events({
    'click a': function(event) {
        alert('Waypoint!');
    }
});
Template.viewbutton.helpers({
    image: function(){
        if(Session.get('locked') == true){
            return "trackon"
        }
        return "trackoff"
    }
});
swatches = ["#44FF00","#FF4400","#0044FF","#FFFF00","#00DDDD","#FF00FF"]
Template.viewport.helpers({
	screenwidth: function(){
		return window.innerWidth;
	},
	screenheight:function(){
		return window.innerHeight - 144;
	},
    youx:function(){
        var locked = Session.get('locked');
        if (typeof locked == 'undefined') {
            locked = true;
        }
        if(locked){
        return (window.innerWidth/2)-13;
        }
        else{
            var zoom = Session.get('zoom');
            if (typeof zoom == 'undefined') {
                zoom = 0.5;
            }
        return getx(Session.get('lastPos').lat,Session.get('lastPos').long,Players.findOne({id: Session.get('id')}).position.latitude,Players.findOne({id: Session.get('id')}).position.longitude,zoom)-13;
        }
    },
    rotate:function(){
        if(Session.get('locked') == true){
        return Session.get('rotation');
    }
    else{
        return 0;
    }
    },
    scale:function(){
        var scale = Session.get('scale');
        if (typeof scale == 'undefined') {
            scale = 1;
        }
        return scale;
    },
    offsetx:function(){
        if(Session.get('locked')== false){
            return Session.get('offsetx');
        }
        else{
            return 0;
        }
    },
    offsety:function(){
        if(Session.get('locked')== false){
            return Session.get('offsety');
        }
        else{
            return 0;
        }
    },
    youy:function(){
        var locked = Session.get('locked');
        if (typeof locked == 'undefined') {
            locked = true;
        }
        if(locked){
        return ((window.innerHeight-144)/2)-1052.3622;
    }
    else{
        var player = Players.findOne({id: Session.get("id")});
        if (typeof player == 'undefined') {
            player = {};
        }
        if (typeof player.position == 'undefined') {
            player.position = {latitude: null, longitude: null};
        }
        var lastPos = Session.get('lastPos');
        if (typeof lastPos == 'undefined') {
            var id = Session.get('id');
            if (typeof id == 'undefined') {
                id = "";
            }
            var player = Players.findOne({id: id});
            if (typeof player == 'undefined') {
                player = {
                    position: {
                        latitude: null,
                        longitude: null
                    }
                }
            }
            lastPos = {'lat':player.position.latitude,'long':player.position.longitude};
        }
        var zoom = Session.get('zoom');
            if (typeof zoom == 'undefined') {
                zoom = 0.5;
            }
        var y = gety(lastPos.lat,lastPos.long,player.position.latitude,player.position.longitude,zoom);
        console.log(y,lastPos.lat,lastPos.long,player.position.latitude,player.position.longitude);
        return y-1052.3622;
        }
    },
    youyu:function(){
        var locked = Session.get('locked');
        if (typeof locked == 'undefined') {
            locked = true;
        }
        if(locked){
        return ((window.innerHeight-144)/2);
    }
    else{
        var lastPos = Session.get('lastPos');
        if (typeof lastPos == 'undefined') {
            var id = Session.get('id');
            if (typeof id == 'undefined') {
                id = "";
            }
            var player = Players.findOne({id: id});
            if (typeof player == 'undefined') {
                player = {
                    position: {
                        latitude: null,
                        longitude: null
                    }
                }
            }
            lastPos = {'lat':player.position.latitude,'long':player.position.longitude};
        }
        var id = Session.get('id');
        if (typeof id == 'undefined') {
            id = "";
        }
        var player = Players.findOne({id: id});
        if (typeof player == 'undefined') {
            player = {
                position: {
                    latitude: null,
                    longitude: null
                }
            }
        }
        var zoom = Session.get('zoom');
            if (typeof zoom == 'undefined') {
                zoom = 0.5;
            }
        return gety(lastPos.lat,lastPos.long,player.position.latitude,player.position.longitude,zoom);
        }
    },
    youxu:function(){
        var locked = Session.get('locked');
        if (typeof locked == 'undefined') {
            locked = true;
        }
        if(locked){
        return (window.innerWidth/2);
    }
        else{
        var lastPos = Session.get('lastPos');
        if (typeof lastPos == 'undefined') {
            var id = Session.get('id');
            if (typeof id == 'undefined') {
                id = "";
            }
            var player = Players.findOne({id: id});
            if (typeof player == 'undefined') {
                player = {
                    position: {
                        latitude: null,
                        longitude: null
                    }
                }
            }
            lastPos = {'lat':player.position.latitude,'long':player.position.longitude};
        }
        var id = Session.get('id');
        if (typeof id == 'undefined') {
            id = "";
        }
        var player = Players.findOne({id: id});
        if (typeof player == 'undefined') {
            player = {
                position: {
                    latitude: null,
                    longitude: null
                }
            }
        }var zoom = Session.get('zoom');
            if (typeof zoom == 'undefined') {
                zoom = 0.5;
            }
        return getx(lastPos.lat,lastPos.long,player.position.latitude,player.position.longitude,zoom);
        }
    },
    centerx:function(){
        return (window.innerWidth/2);
    },
    centery:function(){
        return ((window.innerHeight-144)/2);
    },
    youcolor:function(){
        if(Session.get("locationerr")==false){
            var id = Players.findOne({id: Session.get("id")});
            if (typeof id == 'undefined') {
                id = {};
            }
            if (typeof id.team == 'undefined') {
                id.team = "#999999";
            }
            team = id.team;
        return swatches[team];
    }
    else{
        return "#999999";
    }
    },
    youaccuracy:function(){
        var id = Players.findOne({id: Session.get("id")});
        if (typeof id == 'undefined') {
            id = {};
        }
        if (typeof id.position == 'undefined' || id.position.accuracy == 'undefined') {
            id.position = {accuracy: 0};
        }
        var zoom = Session.get("zoom");
        if (typeof zoom == 'undefined') {
            zoom = 0.5;
        }
        return id.position.accuracy * zoom;
    },
    players: function() {
//        var players = [];
//        var playerList = Players.find().fetch();
//        for (var ii = 0, bb = playerList.length; ii < bb; ii++) {
//            var tempObj = {};
//            var locked = Session.get('locked');
//            if (typeof locked == 'undefined') {
//                locked = false;
//            }
//            var id = Session.get('id');
//            if (typeof id == 'undefined') {
//                id = '';
//            }
//            var player = Players.findOne({id: id});
//            if (typeof player == 'undefined') {
//                player = {
//                    position: {
//                        latitude: null,
//                        longitude: null
//                    }
//                }
//            }
//            var x = 0;
//            if(locked){
//                x = getx(player.position.latitude,player.position.longitude,this.position.latitude,this.position.longitude)-13;
//            }
//            else{
//                x = getx(Session.get('lastPos').lat,Session.get('lastPos').long,this.position.latitude,this.position.longitude)-13;
//            }
//            tempObj.x = x;
//            console.log(x);
//        }
        return Players.find().fetch();
    }
});
Template.dot.helpers({
    x:function(){
        if(Session.get('locked')==true){
            var zoom = Session.get('zoom');
            if (typeof zoom == 'undefined') {
                zoom = 0.5;
            }
        return getx(Players.findOne({id: Session.get('id')}).position.latitude,Players.findOne({id: Session.get('id')}).position.longitude,this.position.latitude,this.position.longitude,zoom)-13;
    }
    else{
        var zoom = Session.get('zoom');
            if (typeof zoom == 'undefined') {
                zoom = 0.5;
            }
        var lastPos = Session.get('lastPos');
        if (typeof lastPos == 'undefined') {
            lastPos = {
                lat: null,
                long: null
            }
        }
        return getx(lastPos.lat,lastPos.long,this.position.latitude,this.position.longitude,zoom)-13;
    }
    },
    y:function(){
        if(Session.get('locked')==true){
            var zoom = Session.get('zoom');
            if (typeof zoom == 'undefined') {
                zoom = 0.5;
            }
        return gety(Players.findOne({id: Session.get('id')}).position.latitude,Players.findOne({id: Session.get('id')}).position.longitude,this.position.latitude,this.position.longitude,zoom)-13;
    }
    else{
        var zoom = Session.get('zoom');
            if (typeof zoom == 'undefined') {
                zoom = 0.5;
            }
        if (typeof lastPos == 'undefined') {
            lastPos = {
                lat: null,
                long: null
            }
        }
        return gety(lastPos.lat,lastPos.long,this.position.latitude,this.position.longitude,zoom)-13;
    }
    },
    xu:function(){
        var locked = Session.get('locked');
        if (typeof locked == 'undefined') {
            locked = true;
        }
         if(locked){
             var id = Session.get('id');
             if (typeof id == 'undefined') {
                 id = '';
             }
             var player = Players.findOne({id: id});
             if (typeof player == 'undefined') {
                 player = {
                     position: {
                         latitude: null,
                         longitude: null
                     }
                 }
             }
             var zoom = Session.get('zoom');
            if (typeof zoom == 'undefined') {
                zoom = 0.5;
            }
             var x = getx(player.position.latitude,player.position.longitude,this.position.latitude,this.position.longitude,zoom);
        return x;
    }
    else{
        var zoom = Session.get('zoom');
            if (typeof zoom == 'undefined') {
                zoom = 0.5;
            }
        return getx(Session.get('lastPos').lat,Session.get('lastPos').long,this.position.latitude,this.position.longitude,zoom);
    }
    },
    yu:function(){
         if(Session.get('locked')==true){var zoom = Session.get('zoom');
            if (typeof zoom == 'undefined') {
                zoom = 0.5;
            }
        return gety(Players.findOne({id: Session.get('id')}).position.latitude,Players.findOne({id: Session.get('id')}).position.longitude,this.position.latitude,this.position.longitude,zoom);
    }
    else{var zoom = Session.get('zoom');
            if (typeof zoom == 'undefined') {
                zoom = 0.5;
            }
         if (typeof lastPos == 'undefined') {
            lastPos = {
                lat: null,
                long: null
            }
        }
        return gety(lastPos.lat,lastPos.long,this.position.latitude,this.position.longitude,zoom);
    }
    },
    accuracy:function(){
        return this.position.accuracy * Session.get("zoom");
    },
    color:function(){
        if(navigator.onLine){
        return swatches[this.team];
    }
    else{
        return "#999999";
    }
    }
});
function getx(yourlat,yourlng,lat,lng,zoom){
        return (window.innerWidth/2) + (distance(yourlat,yourlng,yourlat,lng)*zoom);
    }
    function gety(yourlat,yourlng,lat,lng,zoom){
        return ((window.innerHeight-144)/2) + (distance(yourlat,yourlng,lat,yourlng)*zoom);
    }
function distance(lat1, lng1, lat2, lng2) {
    earthRadius = 6371000; //meters
    dLat = toRadians(lat2-lat1);
    dLng = toRadians(lng2-lng1);
    a = Math.sin(dLat/2) * Math.sin(dLat/2) + Math.cos(toRadians(lat1)) * Math.cos(toRadians(lat2)) * Math.sin(dLng/2) * Math.sin(dLng/2);
    c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    dist = (earthRadius * c);

    return dist;
    }
    function toRadians(value){
        return value * (Math.PI /180);
    }
