import { odds, gcd } from './the-odds';

describe('odds', () => {
  it('returns 1 in 1 for 100%', () => {
    expect(odds(100)).toEqual({
      numerator: 1,
      denominator: 1
    });
  });

  it.skip('returns 1 in 2 for 50%', () => {
    expect(odds(50)).toEqual({
      numerator: 1,
      denominator: 2
    });
  });
});

describe('gcd', () => {
  it('returns 2 for 4 and 8', () => {
    expect(gcd(15, 20)).toEqual(5);
  });
});
