(function () {

    function HomeCtrl(Room, Message, $scope, $window) {
        this.title = "Bloc Chat Application";
        this.Test = ["onex", "twox", "three"];
        this.currentChatRoom = {};
        this.currRoomId = null;
        this.Room = Room.all;
        this.messages = Message.all;
        this.myMessages = [];
        that = this;

        this.getByRoomId = function (roomId) {
            that.myMessages = Message.getByRoomIdTest(roomId);
            alert(Message.roomMessages);
        };

        this.send = function (newMessage) {
            if (this.currentChatRoom.hasOwnProperty('$id') === false) {
                $window.alert("Error: Please select a chatroom first before posting a message");
            }
            else {
                Message.currRoomId = this.currentChatRoom.$id;
                Message.send(newMessage);
            }
        };

    }
    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room','Message', '$scope', '$window', HomeCtrl]);

})();
