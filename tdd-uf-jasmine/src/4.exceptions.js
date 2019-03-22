// Problem 1) create a 'storeDate' function that returns successful if the date passed to it is
// in the past.  Otherwise, throw and exception if the date is in the future

const storeDate = (date) => {
  let currentDate = new Date();

  if (date <= currentDate) {
    return 'successful';
  } else {
    throw new Error('cannot store a date in the future');
  }
};

export default storeDate;
