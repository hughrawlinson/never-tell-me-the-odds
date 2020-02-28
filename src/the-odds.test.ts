import { odds, gcd } from './the-odds';

describe('odds', () => {
  it('returns 1 in 1 for 100%', () => {
    expect(odds(100)).toEqual({
      numerator: 1,
      denominator: 1,
    });
  });

  it('returns 1 in 2 for 50%', () => {
    expect(odds(50)).toEqual({
      numerator: 1,
      denominator: 2,
    });
  });

  it('returns 1 in 5 for 20%', () => {
    expect(odds(20)).toEqual({
      numerator: 1,
      denominator: 5,
    });
  });

  it('returns 3 in 8 for 37.5%', () => {
    expect(odds(37.5)).toEqual({
      numerator: 3,
      denominator: 8,
    });
  });

  it('returns 1 in 1000 for 0.1%', () => {
    expect(odds(0.1)).toEqual({
      numerator: 1,
      denominator: 1000,
    });
  });

  it('handles a fraction that is indivisible by two in the denominator', () => {
    expect(odds(44.4)).toEqual({
      numerator: 4,
      denominator: 11,
    });
  });
});

describe('gcd', () => {
  it('returns 2 for 4 and 8', () => {
    expect(gcd(15, 20)).toEqual(5);
  });
});
