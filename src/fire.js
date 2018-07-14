import firebase from 'firebase';

var config = {
  apiKey: "AIzaSyCvkzFOlwPCeR2Y6dlJJC0I7bNIthvlZ5w",
  projectId: "bollywoodmix-61cb0",
  authDomain: "bollywoodmix-61cb0.firebaseapp.com",
  databaseURL: "https://bollywoodmix-61cb0.firebaseio.com",
  messagingSenderId: "426532497175",
  storageBucket: "bollywoodmix-61cb0.appspot.com",
};

firebase.initializeApp(config);

const messaging = firebase.messaging();
export const database = firebase.database();
const storageRef = firebase.storage().ref();
const uploadAudiosRef = storageRef.child('Upload/')

const storeDeviceTokens = (token) => {
  database.ref('Devices').push().set({ token })
    .catch(function (err) {
    })
}

export const requestPermission = () => {
  console.log("Requesting permission ...");
  messaging.requestPermission()
    .then(function () {
      return messaging.getToken();
    })
    .then(function (token) {
      console.log("Got permission");
      storeDeviceTokens(token)
    })
    .catch(function (err) {
      console.log('Unable to get permission to notify.', err);
    })
}

export const writeSongRequest = (data) => {
  database.ref('Request/' + new Date()).set({
    name: data.Name,
    dedicateTo: data.DedicateTo,
    date: data.date,
    time: data.time,
    song: data.Song
  });
}

export const retrieveAudio = () => {
  database.ref('Audios/latestAudio').once('value').then(function (snapshot) {
    return snapshot.val();
  })
}

export const uploadAudio = (name, category, audioFile) => {
  let categoryRef = uploadAudiosRef.child(category);
  let fileRef = categoryRef.child(name);
  fileRef.put(audioFile).then((snapshot) => {
    console.log(`Your file ${name} with label ${category} has been successfully uploaded.`);
  })
}

messaging.onMessage(function (payload) {
  console.log('onMessage: ', payload);
});
