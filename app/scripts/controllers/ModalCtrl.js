(function () {
    function ModalCtrl($scope, Room) {
        $scope.roomNamePlaceHolder =  "Enter room name here";
        this.title = "Create new room";
        this.label = "Enter room name";
        this.Room = Room.all;

        this.newName = "";

        this.add = function () {
        //    alert(this.newName);
            Room.newName = this.newName;
            Room.add4();
       };
    }
    angular
        .module('blocChat')
        .controller('ModalCtrl', ['ui.bootstrap','Room', ModalCtrl]);
})();
