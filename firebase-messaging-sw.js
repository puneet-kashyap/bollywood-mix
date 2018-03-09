importScripts('https://www.gstatic.com/firebasejs/4.10.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/4.10.1/firebase-messaging.js');

  var config = {
    messagingSenderId: "426532497175"
  };

  firebase.initializeApp(config);

  const messaging = firebase.messaging();

  const requestPermission = () => {
    messaging.requestPermission()
      .then(function() {
        console.log("Got permission");
        return messaging.getToken();
      })
      .then(function(token) {
        console.log(token);
      })
      .catch(function() {
        console.log("Permission denied");
      })
  }

  messaging.onMessage(function(payload) {
    console.log('onMessage: ', payload);
  });
