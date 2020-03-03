# never-tell-me-the-odds

_Don't use this!!_

A micro library to return a ratio (the odds), e.g. 3720 to 1, or 1 in 6, given a percentage.

It's deceptively tricky to code, to handle accuracy properly. Mostly it's an outlet for me to practice test driven development in my spare time. Please don't use this!

## Usage

```js
import theOdds from 'never-tell-me-the-odds';

theOdds(20);

// {
//   "numerator": 1,
//   "denominator" : 5
// }
```
