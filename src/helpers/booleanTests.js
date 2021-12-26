export const isPrime = (number) => {
  if (number < 2) { return false; }
  if (number === 2) { return true; }

  for (let i = 2; i < number; i += 1) {
    if (number % i == 0) {
      return false;
    }
  }
  return true;
};

const fibs = [0, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765, 10946, 17711, 28657, 46368, 75025, 121393, 196418, 317811, 514229, 832040, 1346269, 2178309, 3524578, 5702887, 9227465, 14930352, 24157817, 39088169, 63245986, 102334155];

export const isFibonacci = (number) => {
  return fibs.includes(number);
};

export const isTriangle = (number) => {
  const option = Math.floor(Math.sqrt(number * 2));

  return (option * (option + 1)) / 2 === number;
};
