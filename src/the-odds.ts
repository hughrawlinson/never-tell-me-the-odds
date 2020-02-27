type Odds = {
  numerator: number;
  denominator: number;
}

export function gcd(x: number, y: number) {
  let a = x;
  let b = y;
  let remainder;
  while (b != 0) {
    remainder = a % b;
    a = b;
    b = remainder;
  }
  return a;
}

export function odds(percentage: number): Odds {
  return {
    numerator: 1,
    denominator: 100 / gcd(percentage, 100)
  };
}
