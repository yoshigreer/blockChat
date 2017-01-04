(function() {
  function HomeCtrl(Room, Message, $uibModal) {
    var ctrl = this;
    ctrl.rooms = Room.all;
    //ctrl.messages = Message.getByRoomId('room1');

    ctrl.openModal = function() {
      //open modal
      var modal = $uibModal.open({
        templateUrl: '/templates/modal.html',
        controller: 'ModalInstanceCtrl',
        controllerAs: '$ctrl'
      });
    };

    ctrl.showRoom = function(room) {
      //console.log(room);
      console.log($scope);
      //var roomId = room.$id;
      //var roomName = $event.currentTarget.innerHTML;
      //var roomRef = firebase.database().ref(roomName).parent;
      ctrl.currentRoomName = room.$value;
      ctrl.messages = Message.getByRoomId(room.$id);
      console.log();
    };
  }

  angular
    .module('blocChat')
    .controller('HomeCtrl', ['Room', 'Message', '$uibModal', HomeCtrl]);
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
