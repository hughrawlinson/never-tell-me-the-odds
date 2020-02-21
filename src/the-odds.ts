type Odds = {
  numerator: number;
  denominator: number;
}

export function odds(percentage: number): Odds {
  return {
    numerator: percentage,
    denominator: 100
  };
}
