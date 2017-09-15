(function () {

    function HomeCtrl(Room, Message, $scope, $rootScope, $window) {
        this.title = "Bloc Chat Application";
        this.Test = ["onex", "twox", "three"];
        this.currentChatRoom = {};
        this.currRoomId = null;
        this.Room = Room.all;
        this.messages = Message.all;
        $rootScope.myMessages = [];
        that = this;

        this.getByRoomId = function (roomId) {
            $rootScope.myMessages.length = 0;
            angular.extend($rootScope.myMessages, Message.getByRoomIdTest(roomId));
        };

        this.send = function (newMessage) {
            if (this.currentChatRoom.hasOwnProperty('$id') === false) {
                $window.alert("Error: Please select a chatroom first before posting a message");
            }
            else {
                Message.currRoomId = this.currentChatRoom.$id;
                Message.send(newMessage);
                that.getByRoomId(Message.currRoomId);
            }
        };

    }
    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room','Message', '$scope', '$rootScope', '$window', HomeCtrl]);

})();
