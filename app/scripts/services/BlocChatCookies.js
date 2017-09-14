(function() {
  function BlocChatCookies($window, $cookies, $uibModal, $rootScope) {
      var currentUser = $cookies.get('blocChatCurrentUser');
      if (!currentUser || currentUser === '' ||  currentUser === 'John') {
      // Do something to allow users to set their usernname
        //  currentUser = $window.prompt("Please enter user name:");

        $uibModal.open({
            // Modal configuration object properties
             templateUrl: '/templates/modalsetcookie.html',
             scope: $rootScope,
             controller: function ($rootScope, $uibModalInstance) {
                 $rootScope.assign = function (user) {
                     if (user !== "") {
                         currentUser = user;
                         $rootScope.userName = currentUser;
                         $cookies.put('blocChatCurrentUser', currentUser);
                         $uibModalInstance.close();
                     }
                 };
             }
          })
      }

      else {
          // $window.alert("You are logged in as " + currentUser);
          $rootScope.userName = currentUser;
      }
  }

  angular
    .module('blocChat')
    .run(['$window', '$cookies', '$uibModal', '$rootScope', BlocChatCookies]);
})();
