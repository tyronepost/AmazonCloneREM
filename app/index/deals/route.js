import Ember from 'ember';

var deals = [
  { name: 'Xbox One', image: 'assets/images/xboxone.png', active: true },
  { name: 'Playstation 4', image: 'assets/images/playstation4.png', active: false },
  { name: 'Wii U', image: 'assets/images/wiiu.jpg', active: false }
];

export default Ember.Route.extend({
  model() {
    return deals;
  }
});
