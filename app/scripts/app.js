(function() {
  function config($stateProvider, $locationProvider) {
    $locationProvider
      .html5Mode({
        enabled: true,
        requireBase: false
      });

    $stateProvider
      .state('home', {
        url: '/',
        controller: 'HomeCtrl as home',
        templateUrl: '/templates/home.html'
      });
  }

  angular
    .module('blocChat', ['ui.router', 'firebase', 'ui.bootstrap', 'ngCookies'])
    .config(config);
})();

(function() {
  function BlocChatCookies($cookies, $uibModal) {
    var currentUser = $cookies.get('blocChatCurrentUser');
    if (!currentUser || currentUser === '') {
      $uibModal.open({
          //modal configuration object properties
          templateUrl: '/templates/usernameModal.html',
          controller: 'UsernameModalCtrl',
          controllerAs: '$ctrl',
          backdrop: 'static',
          keyboard: false
      })
    }
  }

  angular
    .module('blocChat')
    .run(['$cookies', '$uibModal', BlocChatCookies]);
})();

(function() {
  function UsernameModalCtrl($uibModalInstance, $scope, $cookies) {
      this.addName = function() {
        if ($scope.username) {
          // if username is entered, the username is stored to cookie and modal closes
          $cookies.put('blocChatCurrentUser', $scope.username);
          $uibModalInstance.dismiss();
        } else {
          // if no username,usere is prompeted to enter one
          window.alert('Please enter a username');
        }
      }

  }
  angular
    .module('blocChat')
    .controller('UsernameModalCtrl', ['$uibModalInstance', '$scope', '$cookies', UsernameModalCtrl]);
})();
