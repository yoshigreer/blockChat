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

    ctrl.showRoom = function($event) {
      var roomName = $event.currentTarget.innerHTML;
      //var roomRef = firebase.database().ref(roomName).parent;
      ctrl.messages = Message.getByRoomId('room1');
      console.log(ctrl.rooms);
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
