(function() {
  function HomeCtrl(Room, $uibModal) {
    var $ctrl = this;
    $ctrl.rooms = Room.all

    $ctrl.openModal = function() {
      //take open modal
      var modal = $uibModal.open({
        templateUrl: "/templates/modal.html",
        //controller: 'ModalInstanceCtrl',
        //controllerAs: '$ctrl'
        controller: {
          Room: function () {
            return Room;
          }
        }
      });
    };
  }

  angular
    .module('blocChat')
    .controller('HomeCtrl', ['Room', '$uibModal', HomeCtrl]);
})();


(function() {
  function ModalInstanceCtrl($uibModalInstance, Room) {
    var $ctrl = this

    /*
    $ctrl.addRoom = function() {
      $ctrl.rooms.$add({
        //$id: "id",
        $value: "test"
      });
    };
    $ctrl.closeModal = function() {
      console.log("cancel");
      //close modal window
      $uibModalInstance.dismiss();
    };
    */
  }
  angular
    .module('blocChat')
    .controller('ModalInstanceCtrl', ['$uibModalInstance', 'Room', ModalInstanceCtrl]);
})


/*
//code copied directly from angular link
angular.module('blocChat').controller('ModalInstanceCtrl', function ($uibModalInstance, items) {
  var $ctrl = this;
  $ctrl.items = items;
  $ctrl.selected = {
    item: $ctrl.items[0]
  };

  $ctrl.ok = function () {
    $uibModalInstance.close($ctrl.selected.item);
  };

  $ctrl.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };
});
*/
