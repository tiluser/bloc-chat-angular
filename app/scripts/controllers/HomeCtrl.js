(function () {

    function HomeCtrl(Room) {
        this.title = "Bloc Chat Application";
        this.Test = ["one", "two", "three"];
        this.Room = Room.all;
    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', HomeCtrl]);

})();
