(function() {
  function HomeCtrl(Room, $uibModal) {
    var ctrl = this;
    ctrl.rooms = Room.all

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
    .controller('HomeCtrl', ['Room', '$uibModal', HomeCtrl]);
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
