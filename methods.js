Meteor.methods({
    newPlayer: function(id, lat, long, speed, heading, accuracy) {
        if (typeof id != 'undefined' && typeof Players.findOne({id: id}) == 'undefined') {
            Players.insert({id: id, position: {
                latitude: lat,
                longitude: long,
                speed: speed,
                heading: heading,
                accuracy: accuracy
            }});
        }
        return id;
    },
    removePlayer: function(id) {
        if (typeof id != 'undefined' && typeof Players.findOne({id: id}) != 'undefined') {
            Players.remove(Players.findOne({id: id}));
        }
        return id;
    }
});
