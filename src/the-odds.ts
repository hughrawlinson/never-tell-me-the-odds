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
  console.log(percentage);
  return {
    numerator: 1,
    denominator: 1
  };
}
