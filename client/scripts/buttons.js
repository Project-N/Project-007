/**
 * Created by Cayden on 8/1/2015.
 */
Template.menubutton.events({
    'click a': function(event) {
        alert('Menu!');
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