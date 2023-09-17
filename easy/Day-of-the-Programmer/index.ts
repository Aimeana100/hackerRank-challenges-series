/*
 * Complete the 'dayOfProgrammer' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts INTEGER year as parameter.
 */

function dayOfProgrammer(year: number): string {
  // Write your code here

  const monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const usedJullianCal: boolean = year < 1918;

  let Sumdays = 0;
  let date = "";
  let month = "";

  if (isLeapYear(year, usedJullianCal)) {
    monthDays[1] = 29;
  }

  if (year == 1918) {
    monthDays[1] = monthDays[1] - 13;
  }

  let i = 0;
  let moveNext = true;

  while (i < 12 && moveNext) {
    let currentDays = Sumdays + monthDays[i];
    month = formatDays(i + 1);

    if (currentDays == 256) {
      date = formatDays(monthDays[i]);
      moveNext = false;
    } else if (currentDays < 256) {
      Sumdays = currentDays;
    } else {
      date = formatDays(256 - Sumdays);
      moveNext = false;
    }
    i++;
  }

  return `${date}.${month}.${year}`;
}

const formatDays = (day: number): string => {
  return day < 10 ? `0${day}` : `${day}`;
};
const isLeapYear = (year: number, usedJullianCallendar: boolean): Boolean => {
  if (usedJullianCallendar) {
    return year % 4 == 0;
  }
  return year % 400 == 0 || (year % 4 == 0 && year % 100 != 0);
};
