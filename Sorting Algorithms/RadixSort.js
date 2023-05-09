// this function get the rightmost number of the value
// this is so that it can start sorting from here
  function getDigit(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}