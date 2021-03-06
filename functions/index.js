const Notification = require("./Notification");
const functions = require('firebase-functions');
const admin = require('firebase-admin');
const cors = require('cors')({ origin: true });
const nodemailer = require('nodemailer');

admin.initializeApp(functions.config().firebase);

var mailTransport = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: functions.config().email.id,
    pass: functions.config().email.pass
  }
});

function sendSongRequestEmail(email, form) {
  const mailOptions = {
    from: `BollywoodMix <noreply@bollywoodmix.ca>`,
    to: email
  };

  mailOptions.subject = `Song request from BollywoodMix fan`;
  mailOptions.text = `
    Hey Andy!

    A fantastic listener has requested to play a song on your show.
    Please check the details below to follow up:

    Name:       ${form.name || ''}
    Dedicate To:      ${form.dedicateTo || ''}
    Date:       ${form.date || ''}
    Time:       ${form.time || ''}
    Song:   ${form.song || ''}

    Cya in your next show.

    Enjoy,
    BollywoodMix Fan Club.`;
  return mailTransport.sendMail(mailOptions).then(() => {
    console.log('New booking email sent to:', email);
  });
}

exports.sendBookingInfo = functions.database.ref('/Request/{name}').onCreate((snap, context) => {
  console.log('New Entry added');
  const original = snap.val();
  console.log('Values', original);
  sendSongRequestEmail(functions.config().email.recipient, original);
})

exports.sendNotification = functions.https.onRequest((req, res) => {
  return admin.database().ref('/Devices/').once('value').then(function (snapshot) {
    snapshot.forEach(function (childSnapshot) {
      Notification(functions.config().bollywoodmix.key, childSnapshot.val().token);
    })
  });
  res.status(200).send('Notification triggered!');
});

exports.getLatestAudio = functions.storage.object().onFinalize((object) => {
  console.log('New Audio added');
  const audio_url = 'https://firebasestorage.googleapis.com/v0/b/'
    + (object.bucket) + '/o/'
    + encodeURIComponent(object.name)
    + '?alt=media&token='
    + object.metadata.firebaseStorageDownloadTokens;

  console.log('URL', audio_url);
  console.log(object);
  allowedContent = ['audio/mpeg', 'audio/mp3']
  if (allowedContent.includes(object.contentType)) {
    admin.database().ref('/Audios/').set({
      latestAudio: audio_url
    });
    console.log('Database updated with latest url');
  }
});
