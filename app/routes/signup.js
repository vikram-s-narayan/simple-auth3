import Ember from 'ember';
import Firebase from 'firebase';

export default Ember.Route.extend({
  actions: {
    signUp: function() {
      var ref = new Firebase("https://authentica3.firebaseio.com");
      var controller = this.get('controller');
      var _this = this;
      var name = controller.get('name');
      var email = controller.get('email');
      var password = controller.get('password');
      var store = this.store;

        ref.createUser({
            email    : email,
            password : password
          }, function(error, userData) {
            if (error) {
              console.log("Error creating user:", error);
              } else {
              console.log("Successfully created user account with uid:", userData.uid);
              var user = store.createRecord('user', {
                name: name,
                email: email,
              });
              user.save().then(function(user){
                _this.get('session').authenticate('authenticator:firebase', {
                  'email': email,
                  'password': password
                }).then(function(){
                  _this.transitionTo('user', user.get('id'));
                });
              });
          }
        });
    }
  }
});
