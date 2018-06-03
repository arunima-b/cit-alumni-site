import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

if (Meteor.isServer) {
  Meteor.methods({
    ///
    // Users
    ///
    getAllUsers() {
      return Meteor.users.find();
    },

    getUser(userId) {
      // TODO
      return;
    },

    removeUser(userId) {
      // TODO
      return;
    },

    updateUserData(dataObj) {
      // TODO;
      return;
    },

    ///
    // Newsletters
    ///
    getAllNewsletters() {
      // TODO
      return;
    },

    getSingleNewsletter(postId) {
      // TODO
      return;
    },

    addNewsletter() {
      // TODO
      return;
    },

    removeNewsletter() {
      // TODO
      return;
    }
  });
}
