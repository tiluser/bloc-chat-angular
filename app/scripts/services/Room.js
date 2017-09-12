(function () {
    function Room($firebaseArray) {
        var Room = {};
        var ref = firebase.database().ref().child("rooms");
        var rooms = $firebaseArray(ref);
        Room.ph = "Enter room name here";
        Room.newName = "New room";
        Room.all = rooms;
        Room.add = function () {
            rooms.$add({ roomName: Room.newName });
        };

        return Room;
    }
    angular
        .module('blocChat')
        .factory('Room', ['$firebaseArray', Room]);
})();
