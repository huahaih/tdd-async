
const add = (a, b) => a + b;

const factorial = (a) => {
  let answer = 1;

  if (a > 0) {
    for (let i = 1; i <= a; i++) {
      answer *= i;
    }
  } else {
    answer = 1;
  }

  return answer;
};


export { add, factorial };
