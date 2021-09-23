import Ember from 'ember';

export default Ember.Service.extend({
  users: [],
  posts: [],

  addUsers(fetched_data){
    this.set('users', fetched_data);
  },
  addPosts(fetched_data){
    this.set('posts', fetched_data);
  }
});
