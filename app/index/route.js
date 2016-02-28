import Ember from 'ember';

export default Ember.Route.extend({
  model : function () {
    return this.store.findAll('category');
  },

  actions: {
    routeTo: function(link) {
      this.transitionTo(link);
    }
  }
});
