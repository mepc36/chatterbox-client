// The controller part of MVC

var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form, which means it would have taken you to where it usually would have
    event.preventDefault();

    // This is the message that comes from the text input box;
    var messageText = document.getElementsByName('message')[0].value;

    Parse.create(messageText, null, null);
    // console.log('click!');
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};