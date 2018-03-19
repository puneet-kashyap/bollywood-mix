import moment from 'moment-timezone';
import 'moment-duration-format';

export const countDownShowTime = () => {
  var estTime = moment().tz("America/Toronto");
  var showTime = moment().tz("America/Toronto").set({'hour':10,'minute':0,'second':0});
  var eveningShow = moment().tz("America/Toronto").set({'hour':17,'minute':0,'second':0});

  var nextDay = moment.duration(showTime.add(1,'day').diff(estTime)).as('minutes');
  var dayAfterTomorrow = moment.duration(showTime.add(2,'day').diff(estTime)).as('minutes');

  var duration, remainingTime;

  if (estTime.day() > 0 && estTime.day() < 6) {
    // Monday to Friday
    if (estTime.day() === 5 && estTime.hours() > 11 && estTime.hours() < 17) {
      //Frday between 10 and 5
      duration = moment.duration(eveningShow.diff(estTime)).asMinutes();
    } else if(estTime.hours() < 10) {
      // monday to friday before 10 am
      duration = moment.duration(showTime.diff(estTime)).asMinutes();
    }
    else {
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
  return remainingTime;
}
