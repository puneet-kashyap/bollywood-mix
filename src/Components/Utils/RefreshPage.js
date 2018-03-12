import moment from 'moment-timezone';

const RefreshPage = (hours, minutes, seconds) => {
  var localTime = new Date();
  var estTime = moment(localTime).tz('America/Toronto')._i;
  // var now = estTime
  var then = new Date(estTime);

  if(estTime.getHours() > hours ||
     (estTime.getHours() === hours && estTime.getMinutes() > minutes) ||
      (estTime.getHours() === hours && estTime.getMinutes() === minutes && estTime.getSeconds() >= seconds)) {
      then.setDate(estTime.getDate() + 1);
  }
  then.setHours(hours);
  then.setMinutes(minutes);
  then.setSeconds(seconds);

  var timeout = (then.getTime() - estTime.getTime());
  setTimeout(function() { window.location.reload(true); }, timeout);
}

export default RefreshPage;
