import Ember from 'ember';

export default Ember.Controller.extend({
  email: '',
  message: '',
  responseMessage: '',

  actions: {
    sendMessage() {
      const email = this.get('email');
      const message = this.get('message');

      this.set('responseMessage', 'Thank you! We\'ve received your message!');
      this.set('email', '');
    }
  }
});
