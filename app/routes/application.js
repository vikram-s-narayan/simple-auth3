import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    logout: function() {
        this.get('session').invalidate().then(function() {
            console.log('logged out');
            this.transitionTo('signup');
        }.bind(this));
    }
  }
});
