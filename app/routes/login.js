import Ember from 'ember';
//import Firebase from 'firebase';

export default Ember.Route.extend({
  actions: {
      login: function() {
        var controller = this.get('controller');
        var _this = this;
          this.get('session').authenticate('authenticator:firebase', {
              'email': controller.get('email'),
              'password': controller.get('password')
          }).then(function() {
            console.log(_this);
              this.transitionTo('protectedpage');
          }.bind(this));
      }
  }
});

/*
The below is code that works properly (arrived at after discussion with Piotr)
login: function() {
  var controller = this.get('controller');
  var email = controller.get('email');
  var password = controller.get('password');
  //var ref = new Firebase("https://authentica3.firebaseio.com/users");
  var _this = this;
  var store = this.store;
  //authenticate and create session
  _this.get('session').authenticate('authenticator:firebase', {
    'email': email,
    'password': password
  }).then(function(){
    console.log('logged in');
    //get user email from users table and transition user to that page
    store.find('user', { orderBy: 'email', equalTo: email}).then(function(users) {
        _this.transitionTo('user', users.get('firstObject.id'));
      });
  });
}
}
*/
/*{
  login: function() {
    var controller = this.get('controller');
    var email = controller.get('email');
    var password = controller.get('password');
    var ref = new Firebase("https://authentica3.firebaseio.com/users");
    var _this = this;
    //authenticate and create session
    _this.get('session').authenticate('authenticator:firebase', {
      'email': email,
      'password': password
    }).then(function(){
      console.log('logged in');
      //get user id from users table and transition user to that page
      ref.orderByChild("email").equalTo(email).on("child_added", function(snapshot){
        console.log(snapshot.key());
      _this.transitionTo('user', snapshot.key());
    });
    }).bind(_this);
  }
}*/

/*
var ref = new Firebase("https://dinosaur-facts.firebaseio.com/dinosaurs");
ref.orderByChild("order").equalTo("theropoda").on("child_added", function(snapshot) {
console.log(snapshot.key())
});
*/

/*{
  login: function(){
    var controller = this.get('controller');
    var store = this.store;
    var email = controller.get('email');
    var password = controller.get('password');
    var _this = this;
    var user = store.createRecord('user', {
      email: email
      });
    user.save().then(function(){
      _this.get('session').authenticate('authenticator:firebase', {
        'email': email,
        'password': password
      }).then(function(){
        console.log('logged in');
      }).bind(_this);
    });
  }
}*/


/*{
  login: function() {
    var email = '';
    var password = '';
    var controller = this.get('controller');
    var store = this.store;
    email = controller.get('email');
    password = controller.get('password');
    var md5password = md5(password);
    console.log('md5 pw => ',md5password);//this is working ... need to implement for supplied password
    var _this = this;

    this.get('session').authenticate('authenticator:firebase', {
      'email': email,
      'password': password
    }).then(function() {
      console.log('logged in');
      var mycuteuserId = _this.get('session.secure.uid') ;
      console.log('this is mycuteuserId: ',mycuteuserId);
      /*store.filter('user', {userId: mycuteuserId}, function(user) {
        console.log(user.get('name'));
      });
      console.log('--------------------');
      console.log('now doing store.find');
      store.find('user', {name: 'dog'}).then(function(user){
        user.forEach(function(item){
          console.log(item.name);
        });
      });
      //store.find('user', '-Jsf0KNpg9BBR5clTZUs').then(function(user){
        //console.log('about to give you name of user ...');
        //console.log(user.get("name"));});
      //var thisUser = store.findById('user', 'Jsf0KNpg9BBR5clTZUs' );
      //console.log('thisUser is: ',thisUser.name);
      _this.transitionTo('user');
    }).bind(_this);
  }
}*/
