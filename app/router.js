import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('index', {path: '/'} ,function() {
    this.route('books');
    this.route('deals');
    this.route('giftcards');
    this.route('sell');
    this.route('help');
  });
});

export default Router;
