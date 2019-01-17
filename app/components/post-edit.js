import Component from '@ember/component';

export default Component.extend({
	actions: {
		save: function(){
			var post = this.get('post');
			this.sendAction('save', post);
		},

		cancel: function(){
			this.sendAction('cancel');
		}
	}
});
