Boundaries = new Mongo.Collection("boundaries");
if (Meteor.isClient) {
    Meteor.subscribe("boundaries");
}
if (Meteor.isServer) {
    Meteor.publish("boundaries", function () {
      return Players.find();
    });
}
