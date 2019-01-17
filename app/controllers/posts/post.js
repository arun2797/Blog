import Controller from '@ember/controller';

export default Controller.extend({
	editMode: false,
	actions:{

		edit: function(){
			this.set('editMode',true);
		},

		delete: function(){
			this.set('editMode',false);
			history.back();
		},

		save: function(post){
			this.set('editMode',false);
			post.save();
		},

		cancel: function(){
			this.set('editMode',false);
		}

	}
});
