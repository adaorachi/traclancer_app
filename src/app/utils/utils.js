const shortenedWord = (string, strLength) => ((string.length >= strLength) ? `${string.substring(0, strLength)} ...` : string);

const fullName = (firstName, lastName) => `${firstName} ${lastName}`;

const timeConvertToSec = hms => {
  const a = hms.split(':');
  const seconds = (+a[0]) * 60 * 60 + (+a[1]) * 60 + (+a[2]);
  return seconds;
};

const secConvertToTime = sec => {
  const dateObj = new Date(sec * 1000);
  const hours = dateObj.getUTCHours();
  const minutes = dateObj.getUTCMinutes();
  const seconds = dateObj.getSeconds();

  const timeString = `${hours.toString().padStart(2, '0')
  }:${minutes.toString().padStart(2, '0')
  }:${seconds.toString().padStart(2, '0')}`;

  return timeString;
};

export {
  shortenedWord,
  fullName,
  timeConvertToSec,
  secConvertToTime,
};
