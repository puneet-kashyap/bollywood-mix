importScripts('https://www.gstatic.com/firebasejs/4.10.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/4.10.1/firebase-messaging.js');

  var config = {
    messagingSenderId: "426532497175"
  };

  firebase.initializeApp(config);

  const messaging = firebase.messaging();

  messaging.setBackgroundMessageHandler(function(payload) {
    console.log('[firebase-messaging-sw.js] Received background message ', payload);
    // Customize notification here
    var notificationTitle = 'BollywoodMix Radio Show is live now.';
    var notificationOptions = {
      body: 'Listen & Enjoy !',
      icon: './src/Images/bollywoodmix-heart.png'
    };

    return self.registration.showNotification(notificationTitle,
      notificationOptions);
  });
