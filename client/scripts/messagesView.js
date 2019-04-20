var MessagesView = {

  $chats : $('#chats'),
  
  initialize: function() {
    MessagesView.render()
  },

  render: function() {
    // MessagesView.$chats = $('<div id="chats"></div>')
    App.fetch()
    debugger;
    for (var i = 0; i < MessagesView.storage.length;i++) {
      MessagesView.$chats.append(MessageView(MessagesView.storage[i]));
    }
    // MessagesView.$chats.empty();
  }

};


for (var i = MessagesView.storage.length  - 1; i > MessagesView.storage.length  - 20; i--) {
  MessagesView.$chats.append(MessageView(MessagesView.storage[i]));
  
}