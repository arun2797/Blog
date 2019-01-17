import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('posts', function() {
    this.route('post', { path: '/:post_id' });
  });
  this.route('about');
  this.route('users', function() {
    this.route('user', { path: '/:user_id' });
  });
});

export default Router;
