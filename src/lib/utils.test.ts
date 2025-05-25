import { expect, it } from 'vitest';
import { cn } from './utils';

it('should return nothing when cn is called with no arguments', () => {
  const result = cn();
  expect(result).toBe('');
});

it('should return a single class name when called with one argument', () => {
  const result = cn('class1');
  expect(result).toBe('class1');
});

it('should return multiple class names separated by a space when called with multiple arguments', () => {
  const result = cn('class1', 'class2', 'class3');
  expect(result).toBe('class1 class2 class3');
});

it('should ignore undefined or null arguments', () => {
  const result = cn('class1', undefined, 'class2', null, 'class3');
  expect(result).toBe('class1 class2 class3');
});

it('should handle an array of class names', () => {
  const result = cn(['class1', 'class2', 'class3']);
  expect(result).toBe('class1 class2 class3');
});

it('should handle a mix of strings and arrays', () => {
  const result = cn('class1', ['class2', 'class3'], 'class4');
  expect(result).toBe('class1 class2 class3 class4');
});

it('should handle nested arrays', () => {
  const result = cn('class1', ['class2', ['class3', 'class4']], 'class5');
  expect(result).toBe('class1 class2 class3 class4 class5');
});
