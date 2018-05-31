import { Meteor } from 'meteor/meteor';
import { HTTP } from 'meteor/http';

if (Meteor.isServer) {
  Meteor.methods({
    getNewsletters() {
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

    getPeople() {
      // TODO
      return;
    }
  });
}
