(function() {
  function HomeCtrl(Room, $uibModal) {
    var ctrl = this;
    ctrl.rooms = Room.all

    ctrl.openModal = function() {
      //take open modal
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
  function ModalInstanceCtrl($uibModalInstance, Room) {
    var ctrl = this;


    ctrl.addRoom = function() {

      ctrl.rooms.$add({
        $id: 'id',
        $value: 'test'
      });

    };

    ctrl.closeModal = function() {
      //close modal window
      $uibModalInstance.dismiss();
    };

  }
  angular
    .module('blocChat')
    .controller('ModalInstanceCtrl', ['$uibModalInstance', 'Room', ModalInstanceCtrl]);
})();
