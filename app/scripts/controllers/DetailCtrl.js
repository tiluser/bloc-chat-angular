(function () {
    function DetailCtrl($scope, $http, $route, $stateParams) {
        this.newName = "";
/*
        this.getRoomInfo = function () {
             $scope.pt.id = $route.current.params.$id;
             $scope.pt.roomName = $route.current.params.roomName;
       };
*/
  //      $scope.id = $route.current.params.$id;
      // $scope.pt.roomName = $route.current.params.roomName;
          console.log($stateParams);
          console.log("Outputted state parameters");
    }
    angular
        .module('blocChat')
        .controller('DetailCtrl', ['$scope','$route','$http', '$stateParams', DetailCtrl]);
})();
