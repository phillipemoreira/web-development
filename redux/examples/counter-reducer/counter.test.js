const counter = require('./counter-reducer-pure');

test('increments when zero', () => {
  expect(counter(0, {type: 'INCREMENT'}))
    .toBe(1);
});

test('increments when one', () => {
  expect(counter(1, {type: 'INCREMENT'}))
    .toBe(2);
});

test('decrements when one', () => {
  expect(counter(1, {type: 'DECREMENT'}))
    .toBe(0);
});

test('action it does not understand', () => {
  expect(counter(1, {type: 'SOMETHING_ELSE'}))
    .toBe(1);
});

test('action it does not understand', () => {
  expect(counter(undefined, {type: 'SOMETHING_ELSE'}))
    .toBe(0);
});