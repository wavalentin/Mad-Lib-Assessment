const addCommas = require('./addCommas');

describe('#addCommas', () => {
  test('it is a function', () => {
    expect(typeof addCommas).toBe('function');
  });
  test('can handle six', () => {
    expect(addCommas(6)).toEqual('6');
  });
  test('can handle one thousand', () => {
    expect(addCommas(1000)).toEqual('1,000');
  });
});