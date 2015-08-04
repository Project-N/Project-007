Objects = new Mongo.Collection('objects');
if (Meteor.isClient) {
    Meteor.subscribe("objects");
}
if (Meteor.isServer) {
    Meteor.publish("objects", function () {
      return Players.find();
    });
}
