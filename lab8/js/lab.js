// lab.js - js file for lab 8
// Myles Marr <mmarr@ucsc.edu>
// November 2, 2023

function findClosestPrime(n) {
	var i = n;
	var j = n;
	while (true) {
		if (isPrime(i)) {
			return i;
		}
		if (isPrime(j)) {
			return j;
		}
		i++;
		j--;
	}
}

function isPrime(n) {
	if (n < 2) {
		return false;
	}
	for (var i = 2; i < n; i++) {
		if (n % i == 0) {
			return false;
		}
	}
	return true;
}

nonPrimes = [1, 4, 6, 8, 9, 10, 12, 14, 15, 16];

console.log(nonPrimes.map(findClosestPrime));

console.log(
	nonPrimes.map(function (n) {
		return n + Math.floor(Math.random() * 100);
	})
);
