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

// This is for integer factorization
// https://en.wikipedia.org/wiki/Pollard%27s_rho_algorithm
export function pollardsRhoAlgo(n: number): number {
  let x = 2;
  let y = 2;
  let d = 1;

  const g = (x: number) => (Math.pow(x, 2) + 1) % n;

  while (d === 1) {
    x = g(x);
    y = g(g(y));
    d = gcd(Math.abs(x - y), n);
  }

  if (d === n) {
    throw new Error("No factors found");
  }

  return d;
}

export function odds(percentage: number): Odds {
  console.log(percentage);
  return {
    numerator: 1,
    denominator: 1
  };
}
