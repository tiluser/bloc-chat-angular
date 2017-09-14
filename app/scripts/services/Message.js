(function() {
  function Message($firebaseArray, $rootScope, $window) {
    var Message = {};
    var ref = firebase.database().ref().child("messages");
    var messages = $firebaseArray(ref);
    Message.currRoomId = null;
    Message.roomMessages = [];

    Message.all = messages;

    Message.getByRoomIdTest = function (roomId) {
      Message.roomMessages = [];
      angular.forEach(messages, function (message) {
          if (typeof message !== 'undefined' && message.roomId === roomId) {
              Message.roomMessages.push(message.body);
          }
      });
      // alert(Message.roomMessages);
      return Message.roomMessages;
    };

    Message.getByRoomId = function(roomId) {
        // .. logic for filtering messages
        var returnedMessages = [];
        returnedMessages = messages.$loaded()
            .then(function() {
                var allMessages = [];
                angular.forEach(messages, function (message) {
                    if (typeof message !== 'undefined' && message.roomId === roomId) {
                        allMessages.push(message.body);
                        Message.roomMessages.push(message.body);
                        alert(allMessages);
                        return allMessages;
                    }
                })
            });
        return returnedMessages;
    };

    Message.send = function(newMessage) {
        // Send method logic
        alert("Message " + newMessage + " sent.")
      //  messages.$add({ roomId: Message.currRoomId, body: newMessage, userName: $rootScope.userName });
        messages.$add({ body: newMessage, userName: $rootScope.userName, roomId: Message.currRoomId  })
    };

    return Message;
  }

  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray','$rootScope', '$window', Message]);
})();
