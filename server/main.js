Meteor.setInterval(function () {
    var now = (new Date()).getTime();
    Players.find({date: {$lt: (now - 60 * 1000)}}).forEach(function (user) {
        Players.remove(user._id);
        console.log(user._id);
    });
}, 5000);
