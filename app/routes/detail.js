import Ember from 'ember';

export default Ember.Route.extend({
  fetchedData: Ember.inject.service(),
  model(params){
    let user = this.get('fetchedData').users.filter((one) => one.id == params.id);
    let posts = this.get('fetchedData').posts.filter((one) => one.userId == params.id);
    let result = {
      user: user[0],
      posts: posts
    }
    return result;
  }
});
