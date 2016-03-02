import Ember from 'ember';

var deals = [
  { image: 'assets/images/xboxone.png', active: true },
  { image: 'assets/images/playstation4.png', active: false }
]

export default Ember.Route.extend({
  model() {
    return deals;
  }
});
