const fetch = require("node-fetch");

const Notification = (key, token) => {
  var key = key;
  var to = token
  var notification = {
    'title': 'BollywoodMix is Live.',
    'body': 'Listen & Enjoy',
    'icon': '/bollywoodmix-heart.png',
    'click_action': 'https://bollywoodmix.ca'
  };

  fetch('https://fcm.googleapis.com/fcm/send', {
    'method': 'POST',
    'headers': {
      'Authorization': 'key=' + key,
      'Content-Type': 'application/json'
    },
    'body': JSON.stringify({
      'notification': notification,
      'to': to
    })
  }).then(function(response) {
    console.log(response);
  }).catch(function(error) {
    console.error(error);
  })
}

module.exports = Notification;
