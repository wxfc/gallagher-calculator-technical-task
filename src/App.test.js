import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
// import { handleTax } from './utils';
const handleTax = require('./utils').handleTax;

test('handleTax 14000', () => {
  const grossCopy = 14000;
  const taxableAmount = 0;
  expect(handleTax(grossCopy, taxableAmount)).toBe(0);
});

test('handleTax 20000', () => {
  const grossCopy = 20000;
  const grossSetTwo = 5000;
  let taxableAmount = 0;
  expect(handleTax(grossCopy, taxableAmount, grossSetTwo)).toBe(1000);
});

test('handleTax 55000', () => {
  const grossCopy = 55000;
  const grossSetThree = 5000;
  let taxableAmount = 0;
  expect(handleTax(grossCopy, taxableAmount, grossSetThree)).toBe(9000);
});
