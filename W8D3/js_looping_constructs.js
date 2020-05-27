function fizzBuzz(array) {
  result = [];

  for (let i = 0; i < array.length; i++) {
    num = array[i]
    divBy3 = num % 3 === 0;
    divBy5 = num % 5 === 0;

    if ((divBy3 || divBy5) && !(divBy3 && divBy5)) {
      result.push(num)
    }
  }

  return result;
}

function isPrime(num) {
  if (num < 2) {
    return false;
  }

  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

function sumOfNPrimes(n) {
  primes = [];

  for (let i = 0; primes.length < n; i++) {
    if (isPrime(i)) {
      primes.push(i)
    }
  }

  return primes.reduce((sum, ele) => sum + ele);
}