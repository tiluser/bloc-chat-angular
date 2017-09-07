(function () {
    function ModalCtrl(Room) {
        this.title = "Create new room";
        this.label = "Enter room name";
        this.Room = Room.all;
    }
    angular
        .module('blocChat')
        .controller('ModalCtrl', ['ui.bootstrap', ModalCtrl]);
})();
