const DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
const MONTHS = "January February March April May June July August September October November December".split(' ');
const ABBR_MONTHS = "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(' ');

export const parseRubyDateTime = (dateTime) => {
  const date = new Date(dateTime);
  const dayString = DAYS[date.getDay()];
  const dateString = ABBR_MONTHS[date.getMonth()] + ' ' + date.getDate();
  const dateStringFull = MONTHS[date.getMonth()] + ' ' + date.getDate();
  const hours = parseInt(date.toUTCString().match(/\s(\d\d):/));
  const minuteString = date.toUTCString().match(/:(\d\d):/)[1];
  let timeString;
  if (hours === 0){
    timeString = `12:${minuteString} AM`;
  } else if (hours === 12){
    timeString = `12:${minuteString} PM`;
  } else if (hours > 12) {
    timeString = `${hours-12}:${minuteString} PM`;
  } else {
    timeString = `${hours}:${minuteString} AM`;
  }
  return { date, dayString, dateString, dateStringFull, hours, minutes: parseInt(minuteString), timeString };
};
// this.day = DAYS[date.getDay()];
// this.date = MONTHS[date.getMonth()] + ' ' + date.getDate();
// // this.time =
// this.time = date.toLocaleTimeString().match( /(\S*)\S{3}\s(\S\S)/).slice(1, 3).join(" ");
