const sumOfPrimes = [1, 4, 9, 16, 27, 40, 57];

export const rowTestOptions = [
  {
    value: 'none',
    label: 'None',
    test: function(i) { return false; }
  },
  {
    value: 'multiples',
    label: 'Multiples of...',
    test: function(i) { return (i+1) % 3 === 0; }
  },
  {
    value: 'primes',
    label: 'Prime gaps',
    test: function(i) { return sumOfPrimes.includes(i); }
  }
];
