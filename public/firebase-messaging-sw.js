  importScripts('https://www.gstatic.com/firebasejs/4.10.1/firebase-app.js');
  importScripts('https://www.gstatic.com/firebasejs/4.10.1/firebase-messaging.js');

    var config = {
      messagingSenderId: "426532497175"
    };

    firebase.initializeApp(config);

    const messaging = firebase.messaging();

    messaging.onMessage(function(payload) {
      console.log('SW onMessage: ', payload);
    });
