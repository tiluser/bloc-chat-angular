
(function () {
    function HomeCtrl(Room) {
        this.title = "Bloc Chat Application";
        this.Room = Room.all;
    }
    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', HomeCtrl]);
})();
