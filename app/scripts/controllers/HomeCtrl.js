(function () {

    function HomeCtrl(Room) {

        this.title = "Bloc Chat Application";
        this.roomNamePlaceHolder =  "Enter room name here";

        this.Test = ["one", "two", "three"];
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
        .controller('HomeCtrl', ['Room', HomeCtrl]);

})();
