import Controller from '@ember/controller';

export default Controller.extend({

	actions: {

		createPost: function(){
			var title = this.get('title');
			var body = this.get('body');
			var id = this.model.current.id

			var newPost = this.store.createRecord('post', {
				title: title,
				body: body,
				user_id: id
			});

			newPost.save();
			location.reload();
		}
	}
});
