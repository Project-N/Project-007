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
        if(Session.get('locked')==true){
        return (window.innerWidth/2)-13;
        }
        else{
        return getx(Session.get('lastPos').lat,Session.get('lastPos').long,Players.findOne({id: Session.get('id')}).position.latitude,Players.findOne({id: Session.get('id')}).position.longitude)-13;
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
        return Session.get('scale');
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
        if(Session.get('locked')==true){
        return ((window.innerHeight-144)/2)-1052.3622;
    }
    else{
        return gety(Session.get('lastPos').lat,Session.get('lastPos').long,Players.findOne({id: Session.get('id')}).position.latitude,Players.findOne({id: Session.get('id')}).position.longitude)-1052.3622;
        }
    },
    youyu:function(){
        if(Session.get('locked')==true){
        return ((window.innerHeight-144)/2);
    }
    else{
        return gety(Session.get('lastPos').lat,Session.get('lastPos').long,Players.findOne({id: Session.get('id')}).position.latitude,Players.findOne({id: Session.get('id')}).position.longitude);
        }
    },
    youxu:function(){
        if(Session.get('locked')==true){
        return (window.innerWidth/2);
    }
        else{
        return getx(Session.get('lastPos').lat,Session.get('lastPos').long,Players.findOne({id: Session.get('id')}).position.latitude,Players.findOne({id: Session.get('id')}).position.longitude);
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
        return swatches[Players.findOne({id: Session.get("id")}).team];
    }
    else{
        return "#999999";
    }
    },
    youaccuracy:function(){
        return Players.findOne({id: Session.get("id")}).position.accuracy * Session.get("zoom");
    },
    players:Players.find().fetch()
});
Template.dot.helpers({
    x:function(){
        console.log("hi");
        if(Session.get('locked')==true){
        return getx(Players.findOne({id: Session.get('id')}).position.latitude,Players.findOne({id: Session.get('id')}).position.longitude,this.position.latitude,this.position.longitude)-13;
    }
    else{
        return getx(Session.get('lastPos').lat,Session.get('lastPos').long,this.position.latitude,this.position.longitude)-13;
    }
    },
    y:function(){
        if(Session.get('locked')==true){
        return gety(Players.findOne({id: Session.get('id')}).position.latitude,Players.findOne({id: Session.get('id')}).position.longitude,this.position.latitude,this.position.longitude)-13;
    }
    else{
        return gety(Session.get('lastPos').lat,Session.get('lastPos').long,this.position.latitude,this.position.longitude)-13;
    }
    },
    xu:function(){
         if(Session.get('locked')==true){
        return getx(Players.findOne({id: Session.get('id')}).position.latitude,Players.findOne({id: Session.get('id')}).position.longitude,this.position.latitude,this.position.longitude);
    }
    else{
        return getx(Session.get('lastPos').lat,Session.get('lastPos').long,this.position.latitude,this.position.longitude);
    }
    },
    yu:function(){
         if(Session.get('locked')==true){
        return gety(Players.findOne({id: Session.get('id')}).position.latitude,Players.findOne({id: Session.get('id')}).position.longitude,this.position.latitude,this.position.longitude);
    }
    else{
        return gety(Session.get('lastPos').lat,Session.get('lastPos').long,this.position.latitude,this.position.longitude);
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
function getx(yourlat,yourlng,lat,lng){
        return (window.innerWidth/2) + (distance(yourlat,yourlng,yourlat,lng)*Session.get("zoom"));
    }
    function gety(yourlat,yourlng,lat,lng){
        return ((window.innerHeight-144)/2) + (distance(yourlat,yourlng,lat,yourlng)*Session.get("zoom"));
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
