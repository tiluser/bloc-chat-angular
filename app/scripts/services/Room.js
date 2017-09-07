(function () {
    function Room($firebaseArray) {
        var Room = {};
        var ref = firebase.database().ref().child("rooms");
        var rooms = $firebaseArray(ref);
        Room.ph = "Enter room name here";
        Room.newName = "New room";
        Room.all = rooms;
        /*
        Room.add = function () {
            // Use the firebase method $add here
              rooms.$add({ __100: "Room100" }).then(function(ref) {
              var id = ref.key;
              console.log("added record with id " + id);
              rooms.$indexFor(id); // returns location in the array
            });
        };

        Room.add2 = function () {
            rooms.$add({  : "100" }).then(function(ref) {
                var id = ref.key;
                ref.value = "BBBB";
                id.$value = "XXXXX";
                console.log("ref is " + ref);
                console.log("added record with id " + id);
                rooms.$indexFor(id); // returns location in the array
            });
        };
*/
        Room.add3 = function () {
            rooms.$add({ hello: "world" });
        };

        Room.add4 = function () {
            rooms.$add({ roomName: Room.newName });
        };

        return Room;
    }
    angular
        .module('blocChat')
        .factory('Room', ['$firebaseArray', Room]);
})();
