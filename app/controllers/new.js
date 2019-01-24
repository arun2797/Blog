import Controller from '@ember/controller';

export default Controller.extend({

	actions: {

		createUser: function(){
			
			var email = this.get('email');
			var password = this.get('password');

			var newUser = this.store.createRecord('user', {
				email: email,
				password: password
			});

			newUser.save();
			this.transitionToRoute('users');
		}
	}

});
