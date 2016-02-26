import Ember from 'ember';

var categories = ['Books', 'Movies', 'Video Games', 'Electronics', 'Clothing', 'Sports', 'Health'];

export default Ember.Route.extend({
  model() {
    return categories;
  }
});
