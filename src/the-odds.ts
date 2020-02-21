type Odds = {
  numerator: number;
  denominator: number;
}

export function odds(percentage: number): Odds {
  console.log(percentage);
  return {
    numerator: 1,
    denominator: 1
  };
}
