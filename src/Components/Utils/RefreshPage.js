const RefreshPage = (hours, minutes, seconds) => {
  var localTime = new Date();
  //Time converted to EST timings
  var now = new Date(new Date().setHours(localTime.getHours() + localTime.getTimezoneOffset()/60 - 5));
  var then = new Date(new Date().setHours(localTime.getHours() + localTime.getTimezoneOffset()/60 - 5));

  if(now.getHours() > hours ||
     (now.getHours() === hours && now.getMinutes() > minutes) ||
      (now.getHours() === hours && now.getMinutes() === minutes && now.getSeconds() >= seconds)) {
      then.setDate(now.getDate() + 1);
  }
  then.setHours(hours);
  then.setMinutes(minutes);
  then.setSeconds(seconds);

  var timeout = (then.getTime() - now.getTime());
  setTimeout(function() { window.location.reload(true); }, timeout);
}

export default RefreshPage;
