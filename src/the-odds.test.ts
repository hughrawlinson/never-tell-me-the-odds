import { odds } from './the-odds';

describe('odds', () => {
  it('returns 1 in 1 for 100%', () => {
    expect(odds(100)).toEqual({
      numerator: 100,
      denominator: 100
    });
  });
});
