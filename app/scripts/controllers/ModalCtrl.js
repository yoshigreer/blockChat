(function() {
  function ModalCtrl($uibModal, Room) {
    this.open = function () {
      //take room name and create room and add to array
      var modal = $uibModal.open({
        templateUrl: 'app/templates/modal.html',
        controller: ''
      });
      Room.all.$add({})
    };

    this.cancel = function () {
      //close modal window
      $uibModal.dismiss();
    };
  }

  angular
    .module('blocChat')
    .controller('ModalCtrl', ['$uibModal', 'Room', ModalCtrl]);
})();
