// show the user the rooms;

var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    setInterval(MessageView.render,1000);
  },

  render: function() {
  }

};
