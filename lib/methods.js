Meteor.methods({
    newPlayer: function(id, team, lat, long, speed, heading, accuracy) {
        if (typeof id !== 'undefined' && typeof Players.findOne({id: id}) === 'undefined') {
            Players.insert({
                id: id,
                team: team,
                position: {
                    latitude: lat,
                    longitude: long,
                    speed: speed,
                    heading: heading,
                    accuracy: accuracy
                },
                date: (new Date()).getTime()
            });
        }
        return id;
    },
    updatePlayer: function(id, lat, long, speed, heading, accuracy) {
        if (typeof id !== 'undefined' && typeof Players.findOne({id: id}) !== 'undefined') {
            Players.update(Players.findOne({id: id})._id, {id: id, team:Players.findOne({id: id}).team, position: {
                latitude: lat,
                longitude: long,
                speed: speed,
                heading: heading,
                accuracy: accuracy
            },
            date: (new Date()).getTime()
        });
        }
        return id;
    },
    removePlayer: function(id) {
        if (typeof id !== 'undefined' && typeof Players.findOne({id: id}) !== 'undefined') {
            Players.remove(Players.findOne({id: id}));
        }
        return id;
    },
    removeAll: function() {
        // Temporarily here for development purposes. Will be removed in the final version.
        players = Players.find().fetch();
        for (var ii = 0, bb = players.length; ii < bb; ii++) {
            Players.remove(players[ii]._id);
        }
    }
});
