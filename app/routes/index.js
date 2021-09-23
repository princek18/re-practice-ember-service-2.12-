import Ember from 'ember';

export default Ember.Route.extend({
  fetchedData: Ember.inject.service('fetched-data'),
  model(){
    return [
      fetch("https://jsonplaceholder.typicode.com/users").then((response) => {
      response.json().then((data) => {
        this.get('fetchedData').addUsers(data);
      })
    }),
    fetch("https://jsonplaceholder.typicode.com/posts").then((response) => {
      response.json().then((data) => {
        this.get('fetchedData').addPosts(data);
      })
    }),
  ]
  }
});
