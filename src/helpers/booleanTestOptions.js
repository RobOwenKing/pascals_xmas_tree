const sumOfPrimes = [2, 5, 10, 17, 28, 41, 58];

export const rowTestOptions = [
  {
    value: 'multiples',
    label: 'Multiples of...',
    test: function(i) { return i % 2 === 0; }
  },
  {
    value: 'primes',
    label: 'Prime gaps',
    test: function(i) { return sumOfPrimes.includes(i); }
  }
];
