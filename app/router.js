import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('signup');
  this.route('protectedpage');
  this.route('login');
  this.route('survey');
  this.route('user', {path: '/:userId'});
});

export default Router;
