var Message = function(text){
    this.text = text;
    this.username = App.username || 'anonymous'
    this.roomname = 'lobby'
}