var MessagesView = {

  $chats : $('#chats'),
  
  initialize: function() {
    setInterval(MessagesView.render,50)
  },
  
  currentUser : '',

  render: function() {
    // MessagesView.$chats = $('<div id="chats"></div>')
    
    App.fetch();
    
    if(MessagesView.objectID){
      for (var i = 0; incomingMessages[i].objectId !== MessagesView.objectID; i++) {
          
          var newMessages = $('<div></div>');
          newMessages.append(MessageView(incomingMessages[i]))
        }
      MessagesView.$chats.prepend(newMessages)
    } else {
      for (var i = 0; i < 20; i++) {
        if(incomingMessages[i].username && incomingMessages[i].username.startsWith(MessagesView.currentUser)){
          MessagesView.$chats.append(MessageView(incomingMessages[i]));
        }
      }
    }
    MessagesView.objectID = incomingMessages[0].objectId
    }
};



// for (var i = MessagesView.storage.length  - 1; i > MessagesView.storage.length  - 20; i--) {
//   MessagesView.$chats.append(MessageView(MessagesView.storage[i]));
  
// }