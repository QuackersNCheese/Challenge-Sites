/* Codewars
In this kata, we will make a function to test whether a period is late.

Our function will take three parameters:

last - The Date object with the date of the last period

today - The Date object with the date of the check

cycleLength - Integer representing the length of the cycle in days

Return true if the number of days passed from last to today is greater than cycleLength. Otherwise, return false.

FundamentalsDate Time*/
function periodIsLate(last, today, cycleLength) {
  let delta = Math.floor((today - last) / (1000 * 60 * 60 * 24));
  return delta > cycleLength;
}

// Testing
console.log(periodIsLate(new Date(2016, 6, 13), new Date(2016, 7, 16), 35), false);
console.log(periodIsLate(new Date(2016, 6, 13), new Date(2016, 7, 16), 28), true);