import moment from 'moment-timezone';
import 'moment-duration-format';

export const EstTime = () => moment().tz("America/Toronto");

export const LocalTime = (estTime) => {
  // local time zone of the user
  const localZone = moment.tz.guess();
  if (estTime) {
    return new EstTime().set({'hour':estTime,'minute':0,'second':0}).tz(localZone);
  } else {
    return new EstTime().tz(localZone);
  }
}

export const countDownShowTime = () => {
  const estTime = new EstTime();
  const showTime = new EstTime().set({'hour':10,'minute':0,'second':0});
  const eveningShow = new EstTime().set({'hour':17,'minute':0,'second':0});

  const nextDay = moment.duration(
    new EstTime().set({'hour':10,'minute':0,'second':0}).add(1,'day').diff(estTime)
  ).as('minutes');
  const dayAfterTomorrow = moment.duration(
    new EstTime().set({'hour':10,'minute':0,'second':0}).add(2,'day').diff(estTime)
  ).as('minutes');

  var duration, remainingTime;
  let nextShowTime = showTime;

  if (estTime.day() > 0 && estTime.day() < 6) {
    // Monday to Friday
    if (estTime.day() === 5 && estTime.hours() > 11 && estTime.hours() < 17) {
      //Frday between 10 and 5
      nextShowTime = eveningShow;
      duration = moment.duration(eveningShow.diff(estTime)).asMinutes();
    } else if(estTime.hours() < 10) {
      // monday to friday before 10 am
      duration = moment.duration(showTime.diff(estTime)).asMinutes();
    }
    else {
      // monday to friday after 10 am
      duration = nextDay;
    }

  } else if (estTime.day() === 6) {
    // on Saturday
      duration = dayAfterTomorrow;
  } else {
    // on Sunday
    duration = nextDay;
  }
  remainingTime = moment.duration(duration, "minutes").format("hh:mm:ss");
  return {remainingTime: remainingTime, nextShowTime: nextShowTime};
}
