var MessagesView = {

  $chats : $('#chats'),
  
  initialize: function() {
    setInterval(MessagesView.render,50)
  },
  
  currentUser : 'hi',

  render: function() {
    // MessagesView.$chats = $('<div id="chats"></div>')
    
    App.fetch();

    
    if(MessagesView.objectID){
      for (var i = 0; MessagesView.storage[i].objectId !== MessagesView.objectID; i++) {
          var newMessages = $('<div></div>');
          newMessages.append(MessageView(MessagesView.storage[i]))
        }
      MessagesView.$chats.prepend(newMessages)
    } else {
      for (var i = 0; i < 20; i++) {
        console.log(MessagesView.storage[i].username);
          MessagesView.$chats.append(MessageView(MessagesView.storage[i]));
      }
    }
    MessagesView.objectID = MessagesView.storage[0].objectId
    }
};



// for (var i = MessagesView.storage.length  - 1; i > MessagesView.storage.length  - 20; i--) {
//   MessagesView.$chats.append(MessageView(MessagesView.storage[i]));
  
// }