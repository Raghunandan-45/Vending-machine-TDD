import { describe, it, expect } from 'vitest';
import { getChange } from '../src/change.js';

describe('getChange', () => {
  it('should return empty array when no change needed', () => {
    const result = getChange(1, 1);
    expect(result).toEqual([]);
  });

  it('should return [50, 20, 10, 5] for getChange(215, 300)', () => {
    const result = getChange(215, 300);
    expect(result).toEqual([50, 20, 10, 5]);
  });

  it('should return [100, 10, 2, 2] for getChange(486, 600)', () => {
    const result = getChange(486, 600);
    expect(result).toEqual([100, 10, 2, 2]);
  });

  it('should return all coin types for getChange(12, 400)', () => {
    const result = getChange(12, 400);
    // 388 pence change = 100*3 + 50 + 20 + 10 + 5 + 2 + 1
    expect(result).toEqual([100, 100, 100, 50, 20, 10, 5, 2, 1]);
  });
});