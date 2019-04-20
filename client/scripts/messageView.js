// view part of MVC

// Creation of the actual message that WILL hold the message;
// it doesn't hold it yet!


var MessageView = function(msg) {
  // = _.template(`
  //     <!--
  
  //     <div class="chat">
  //       <div class="username"></div>
  //       <div></div>
  //     </div>
  //     -->
  //   `)

    var chat = $('<div class="chat"></div>');
    var user = $(`<div class="username" data-name="${msg.username}"></div>`);
    user.text(msg.username)
    user.click(function(){ 
      MessagesView.currentUser = msg.username;
      MessagesView.objectID = undefined;
    })
    var chatter = $('<div class="text"></div>');
    chatter.text(msg.text)
    chat.append(user);
    chat.append(chatter);
    return chat;

    
    
};

