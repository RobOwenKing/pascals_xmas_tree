const sumOfPrimes = [1, 4, 9, 16, 27, 40, 57];

export const rowTestOptions = [
  {
    value: 'none',
    label: 'None (Pascal\'s triangle)',
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

export const highlightTestOptions = [
  {
    value: 'none',
    label: 'None',
    test: function(i) { return false; }
  },
  {
    value: 'multiples',
    label: 'Multiples of...',
    test: function(i) { return i % 3 === 0; }
  },
  {
    value: 'primes',
    label: 'Prime numbers',
    test: function(i) { return false; }
  },
  {
    value: 'fibonnaci',
    label: 'Fibonnaci numbers',
    test: function(i) { return false; }
  },
  {
    value: 'powers',
    label: 'Powers of...',
    test: function(i) { return false; }
  },
  {
    value: 'squares',
    label: 'Square numbers',
    test: function(i) { return Math.floor(Math.sqrt(i)) ** 2 === i; }
  }
];
