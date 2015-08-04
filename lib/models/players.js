Players = new Mongo.Collection("players");
if (Meteor.isClient) {
    Meteor.subscribe("players");
}
if (Meteor.isServer) {
    Meteor.publish("players", function () {
      return Players.find();
    });
}
