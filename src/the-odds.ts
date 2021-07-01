type Odds = {
  numerator: number;
  denominator: number;
};

export function gcd(x: number, y: number) {
  let a = x;
  let b = y;
  let remainder;
  while (b !== 0) {
    remainder = a % b;
    a = b;
    b = remainder;
  }
  return a;
}

function isRound(n: number) {
  return Math.floor(n) === n;
}

export function odds(percentage: number): Odds {
  const denominator = 1 / (percentage / 100);

  for (let numerator = 1; numerator < 10000; numerator++) {
    if (isRound(numerator * denominator)) {
      return {
        numerator,
        denominator: numerator * denominator,
      };
    }
  }

  throw new Error('No odds found below 10000');
}
