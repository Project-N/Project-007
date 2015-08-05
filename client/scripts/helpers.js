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

Template.viewport.helpers({
	screenwidth: function(){
		return window.innerWidth;
	},
	screenheight:function(){
		return window.innerHeight - 144;
	},
    youx:function(){
        return (window.innerWidth/2)-13;
    },
    youy:function(){
        return ((window.innerHeight-144)/2)-1052.3622;
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
