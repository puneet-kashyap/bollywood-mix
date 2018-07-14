import moment from 'moment-timezone';

const RefreshPage = (hours, minutes, seconds) => {
  var estTime = moment().tz("America/Toronto");
  var then = new Date(estTime);

  if (estTime.hours() > hours ||
    (estTime.hours() === hours && estTime.minutes() > minutes) ||
    (estTime.hours() === hours && estTime.minutes() === minutes && estTime.seconds() >= seconds)) {
    then.setDate(estTime.date() + 1);
  }
  then.setHours(hours);
  then.setMinutes(minutes);
  then.setSeconds(seconds);

  var timeout = (then.getTime() - estTime.valueOf());
  setTimeout(function () { window.location.reload(true); }, timeout);
}

export default RefreshPage;
