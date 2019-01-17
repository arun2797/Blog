import Component from '@ember/component';

export default Component.extend({
	actions: {
		edit: function(){
			this.sendAction('edit');
		},

		delete: function(){
			var id = this.get('post').user_id;
			var post = this.get('post').destroyRecord();
			this.sendAction('delete',id);
		}
	}
});
