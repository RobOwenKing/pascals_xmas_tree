import { isPrime, isFibonacci, isTriangle } from './booleanTests.js';

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
    test: function(i, factor) { return (i+1) % factor === 0; }
  },
  {
    value: 'primes',
    label: 'Prime gaps',
    test: function(i) { return sumOfPrimes.includes(i); }
  },
  {
    value: 'squares',
    label: 'Square numbers',
    test: function(i) { return i > 1 && Math.floor(Math.sqrt(i+1)) ** 2 === i+1; }
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
    test: function(i, factor) { return i % factor === 0; }
  },
  {
    value: 'primes',
    label: 'Prime numbers',
    test: function(i) { return isPrime(i); }
  },
  {
    value: 'fibonnaci',
    label: 'Fibonnaci numbers',
    test: function(i) { return isFibonacci(i); }
  },
  {
    value: 'squares',
    label: 'Square numbers',
    test: function(i) { return Math.floor(Math.sqrt(i)) ** 2 === i; }
  },
  {
    value: 'triangles',
    label: 'Triangle numbers',
    test: function(i) { return isTriangle(i); }
  }
];
