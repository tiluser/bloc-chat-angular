(function () {
    function ModalCtrl($scope, Room) {
        this.roomNamePlaceHolder =  "Enter room name here";
        this.title = "Create new room";
        this.label = "Enter room name";
        this.Room = Room.all;

        this.newName = "";

        this.add = function () {
        //    alert(this.newName);
            Room.newName = this.newName;
            Room.add();
       };
    }
    angular
        .module('blocChat')
        .controller('ModalCtrl', ['$scope', 'Room', ModalCtrl]);
})();
