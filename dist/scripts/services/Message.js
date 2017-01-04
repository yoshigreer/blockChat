(function() {
  function Message($firebaseArray) {
    var ref = firebase.database().ref().child("messages");
    var messages = $firebaseArray(ref);

    return {
      getByRoomId: function (roomId) {
        return $firebaseArray(ref.orderByChild('roomId').equalTo(roomId));
        //var sortedMessages = $firebaseArray(sortedRef);
        //return sortedMessages;
      }
    };
  }

  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', Message]);
})();
