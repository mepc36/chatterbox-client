// show the user the rooms;

var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),



  initialize: function() {
    setInterval(RoomsView.render,1000);
  },

  render: function() {
    for(var i = 0; i < 50; i++){
      Rooms[incomingMessages[i].roomname] = incomingMessages[i].roomname;
    }
  },

};
