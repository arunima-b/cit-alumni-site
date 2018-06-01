import { Meteor } from 'meteor/meteor';
import { HTTP } from 'meteor/http';

if (Meteor.isServer) {
  Meteor.methods({

    ///
    // Newsletters
    ///
    getAllNewsletters() {
      let result;

      try { // Trap non-HTTP errors

        try { // HTTP call
          result = HTTP.call('GET', SOMEURLFIXME); // TODO
        } catch (callErr) {
          result = {
            error: {
              statusCode: callErr.response.statusCode,
              error: callErr.response.content
            }
          }
        } finally {
          return result;
        }

      } catch (err) {
        console.log('General error: ' + err);
        let result = {
          error: {
            statusCode: 0,
            error: err
          }
        }
        return JSON.stringify(result);
      }
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
    },

    ///
    // People
    ///
    getAllPeople() {
      // TODO
      return;
    },

    getPerson(userId) {
      // TODO
      return;
    },

    addPerson(personObj) {
      // TODO
      return;
    },

    removePerson(userId) {
      // TODO
      return;
    },
  });
}
