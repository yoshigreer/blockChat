(function() {
  function HomeCtrl(Room, Message) {
    this.rooms = Room.all;

    this.messages = Message;
  }

  angular
    .module('blocChat')
    .controller('HomeCtrl', ['Room', 'Message', HomeCtrl]);
})();
