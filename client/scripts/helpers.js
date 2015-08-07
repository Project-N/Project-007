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
        alert('View!');
    }
});
Template.waypointbutton.events({
    'click a': function(event) {
        alert('Waypoint!');
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
        return (window.innerWidth/2)-13 + Session.get("offsetx");
    },
    rotate:function(){
        return Session.get('rotation');
    },
    scale:function(){
        return Session.get('scale');
    },
    youy:function(){
        return ((window.innerHeight-144)/2)-1052.3622 + Session.get("offsety");
    },
    youyu:function(){
        return ((window.innerHeight-144)/2) + Session.get("offsety");
    },
    youxu:function(){
        return (window.innerWidth/2) + Session.get("offsetx");
    },
    youcolor:function(){
        return swatches[Players.findOne({id: Session.get("id")}).team];
    },
    youaccuracy:function(){
        return Players.findOne({id: Session.get("id")}).position.accuracy * Session.get("zoom");
    },
    players:Players.find().fetch()
});
Template.dot.helpers({
    x:function(){
        return this.id;
    },
    y:function(){
        return this.team;
    }
});
