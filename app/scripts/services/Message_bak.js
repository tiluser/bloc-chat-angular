(function () {
    function Message($firebaseArray, $window, $rootScope) {
        var Message = {};
        var ref = firebase.database().ref().child("rooms");
        var messages = $firebaseArray(ref);
/*
        messages.$loaded()
            .then(function() {
                angular.forEach(messages, function (message) {
                    console.log(message);
                })
            });
*/
        Message.all = messages;

        Message.getByRoomIdTest = function (roomId) {
            var x = ["zztop", "tulip", "train wreck"];
            alert(x);
            return x;
        };

        Message.getByRoomId = function (roomId) {
            var allMessages = [];
            messages.$loaded().then(function() {

                  angular.forEach(messages, function (message) {
                      if (typeof message.messages !== 'undefined' && message.$id === roomId) {
                          // alert(message.$id);
                          var msgSet = message.messages;
                          for (var msg in msgSet) {
                                 allMessages.push(msgSet[msg]);
                                // alert(msgSet[msg]);
                          }
                          alert(allMessages);
                          return allMessages;
                      }
                  })
              });
              alert(allMessages);
        };

        Message.send2 = function (roomId) {
          var returnedMessages = [];
          returnedMessages = messages.$loaded()
              .then(function() {
                  var allMessages = [];
                  angular.forEach(messages, function (message) {
                      if (typeof message.messages !== 'undefined' && message.$id === roomId) {
                          // alert(message.$id);
                          var msgSet = message.messages;
                          for (var msg in msgSet) {
                                 allMessages.push(msgSet[msg]);
                                // alert(msgSet[msg]);
                          }
                          alert(allMessages);
                          return allMessages;
                      }
                  })
              });
              return returnedMessages;
        };

        Message.send = function (newMessage) {
            // Send method logic
            var messagesToSend = [];
            messagesToSend.push(newMessage);
            // alert("Message sent is " + newMessage);

            messages.$add({ messages: messagesToSend });
            alert();
            return 0;
        };

        return Message;
    }

    angular
        .module('blocChat')
        .factory('Message', ['$firebaseArray', '$window', '$rootScope', Message]);
})();
