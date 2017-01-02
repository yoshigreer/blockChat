(function() {
  function HomeCtrl(Room, Message, $uibModal, $firebaseArray) {
    var ctrl = this;
    ctrl.rooms = Room.all;
    //ctrl.messages = Message.messages;
    console.log(Message.getByRoomId('room1'));

    ctrl.openModal = function() {
      //open modal
      var modal = $uibModal.open({
        templateUrl: '/templates/modal.html',
        controller: 'ModalInstanceCtrl',
        controllerAs: '$ctrl'
      });
    };
  }

  angular
    .module('blocChat')
    .controller('HomeCtrl', ['Room', 'Message', '$uibModal', '$firebaseArray', HomeCtrl]);
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
