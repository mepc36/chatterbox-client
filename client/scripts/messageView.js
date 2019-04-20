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
    var user = $('<div class="username"></div>');
    var chatter = $('<div class="text"></div>');
    $('.text').text(msg.text)
    $('.username').text(msg.username)

    chat.append(user);
    chat.append(chatter);
    return chat;
};