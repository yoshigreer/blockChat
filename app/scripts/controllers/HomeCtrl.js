(function() {
  function HomeCtrl(Room, $uibModal) {
    this.rooms = Room.all;
      this.addRo

      this.openModal = function () {
        //take room name and create room and add to array
        console.log("open");
        var modal = $uibModal.open({
          templateUrl: "/templates/modal.html",
          controller: function($scope) {
            console.log('controller of modal');

          }
        });
        //Room.all.$add({})
      };

      this.cancel = function () {
        //close modal window
        $uibModal.dismiss();
      };
  }

  angular
    .module('blocChat')
    .controller('HomeCtrl', ['Room', '$uibModal', HomeCtrl]);
})();
