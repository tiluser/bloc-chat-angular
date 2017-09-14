(function () {

    function HomeCtrl(Room, Message, $scope, $window) {
        this.title = "Bloc Chat Application";
        this.Test = ["onex", "twox", "three"];
        this.currentChatRoom = {};
        this.currRoomId = null;
        this.Room = Room.all;
        this.messages = Message.all;
        this.myMessages = {};

        //this.message -
        this.getByRoomId = function (roomId) {
      //      this.myMessage = Message.getByRoomId(roomId);
            this.myMessages = Message.getByRoomId(roomId);
            alert(this.myMessages);
        };
        this.send = function (newMessage) {
            retVal = Message.send(newMessage);
        };

    }
    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room','Message', '$scope', '$window', HomeCtrl]);

})();
