import firebase from 'firebase';

  var config = {
    databaseURL: "https://bollywoodmix-61cb0.firebaseio.com",
    messagingSenderId: "426532497175"
  };

  firebase.initializeApp(config);

  const messaging = firebase.messaging();
  const database = firebase.database();

  const storeDeviceTokens = (token) => {
    database.ref('Devices').push().set({token})
    .catch(function(err) {
      console.log('Token catch.');
    })
  }

  export const requestPermission = () => {
    console.log("Requesting permission ...");
    messaging.requestPermission()
      .then(function() {
        return messaging.getToken();
      })
      .then(function(token) {
        console.log("Got permission");
        storeDeviceTokens(token)
      })
      .catch(function(err) {
        console.log('Unable to get permission to notify.', err);
      })
  }

  messaging.onMessage(function(payload) {
    console.log('onMessage: ', payload);
  });
