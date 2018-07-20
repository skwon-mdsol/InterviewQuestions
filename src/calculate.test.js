const calculate = require('./calculate')

describe('calculate', () => {
  it('passes', () => {
    expect(calculate()).toEqual(undefined);
  });
});
