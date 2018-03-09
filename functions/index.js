const Notification = require("./Notification");
const functions = require('firebase-functions');
const admin = require('firebase-admin');
const cors = require('cors')({origin: true});

admin.initializeApp(functions.config().firebase);

exports.sendNotification = functions.https.onRequest((req, res) => {
  return admin.database().ref('/Devices/').once('value').then(function(snapshot) {
    snapshot.forEach(function(childSnapshot) {
      Notification(functions.config().bollywoodmix.key, childSnapshot.val().token);
    })
  });
  res.status(200).send('Notification triggered!');
});
