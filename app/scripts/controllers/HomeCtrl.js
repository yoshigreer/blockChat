(function() {
  function HomeCtrl(Room, Message, $uibModal, $cookies, $scope, $timeout) {
    var ctrl = this;
    ctrl.rooms = Room.all;

    ctrl.openModal = function() {
      //open modal
      var modal = $uibModal.open({
        templateUrl: '/templates/modal.html',
        controller: 'ModalInstanceCtrl',
        controllerAs: '$ctrl'
      });
    };

    ctrl.showRoom = function(room) {
      ctrl.currentRoomName = room.$value;
      ctrl.currentRoomId = room.$id;
      ctrl.messages = Message.getByRoomId(ctrl.currentRoomId);
      $timeout(function() {
        window.scrollTo(0,document.body.scrollHeight);
      }, 0);
    };

    ctrl.sendMessage = function(newMessage) {
      var date = new Date(Date.now());
      var hours = date.getHours();
      if (hours > 12) {
        hours = hours - 12;
        if (hours < 10) {
          hours = "0" + hours;
        }
      }
      var minutes = date.getMinutes();
      if (minutes < 10) {
        minutes = "0" + minutes;
      }

      var messageObject = {
        content: newMessage,
        roomId: ctrl.currentRoomId,
        sentAt: hours + ':' + minutes,
        username: $cookies.get('blocChatCurrentUser'),
      }
      Message.send(messageObject);
      $scope.newMessage = "";
      $scope.form.$setPristine();
    };
  }

  angular
    .module('blocChat')
    .controller('HomeCtrl', ['Room', 'Message', '$uibModal', '$cookies', '$scope', '$timeout', HomeCtrl]);
})();


(function() {
  function ModalInstanceCtrl($uibModalInstance, Room, $scope) {
    var ctrl = this;
    ctrl.rooms = Room.all;

    ctrl.addRoom = function() {
      //add room name
      ctrl.rooms.$add({
        $value: $scope.roomName
      });
      //close modal window
      $uibModalInstance.dismiss();
    };

    ctrl.closeModal = function() {
      //close modal window
      $uibModalInstance.dismiss();
    };

  }
  angular
    .module('blocChat')
    .controller('ModalInstanceCtrl', ['$uibModalInstance', 'Room', '$scope', ModalInstanceCtrl]);
})();
