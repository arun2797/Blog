import Route from '@ember/routing/route';

export default Route.extend({

  model: function(params) {

  	return this.store.findRecord('user',params.user_id);
    // return Ember.RSVP.hash({
    //   current: this.store.findRecord('user',params.user_id),
    //   posts: this.store.findAll('post')

    // });
  }


});
