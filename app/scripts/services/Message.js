(function() {
  function Message($firebaseArray) {
    var ref = firebase.database().ref().child("messages");
    var messages = $firebaseArray(ref);

    return {
      getByRoomId: function (roomId) {
        return $firebaseArray(ref.orderByChild('roomId').equalTo(roomId));
      },
      send: function(newMessage) {
              messages.$add(newMessage);
      }
    };
  }

  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', Message]);
})();
