import { i18n } from 'next-i18next';

export function getTimeSince(date: string): string {
  const now = new Date();
  const updateDate = new Date(date);
  const timeDifference = now.getTime() - updateDate.getTime();
  const seconds = Math.floor(timeDifference / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const week = Math.floor(days / 7);
  const month = Math.floor(week / 4);
  const year = Math.floor(month / 12);
  if (year > 0) {
    return `${year} ${i18n?.t(year > 1 ? 'time:years' : 'time:year')} ${i18n?.t(
      `time:ago`,
    )}`;
  } else if (month > 0) {
    return `${month} ${i18n?.t(
      month > 1 ? 'time:months' : 'time:month',
    )} ${i18n?.t(`time:ago`)}`;
  } else if (week > 0) {
    return `${week} ${i18n?.t(week > 1 ? 'time:weeks' : 'time:week')} ${i18n?.t(
      `time:ago`,
    )}`;
  } else if (days > 0) {
    return `${days} ${i18n?.t(days > 1 ? 'time:days' : 'time:day')} ${i18n?.t(
      `time:ago`,
    )}`;
  } else if (hours > 0) {
    return `${hours} ${i18n?.t(
      hours > 1 ? 'time:hours' : 'time:hour',
    )} ${i18n?.t(`time:ago`)}`;
  } else if (minutes > 0) {
    return `${minutes} ${i18n?.t(
      minutes > 1 ? 'time:minutes' : 'time:minute',
    )} ${i18n?.t(`time:ago`)}`;
  } else {
    return `${seconds} ${i18n?.t(
      seconds > 1 ? 'time:seconds' : 'time:second',
    )} ${i18n?.t(`time:ago`)}`;
  }
}
