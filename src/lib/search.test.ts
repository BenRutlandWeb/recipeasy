import { describe, expect, it } from 'vitest';
import { searchListings, type CompactListing, type SearchIndex } from '@/lib/search';
import { toFraction } from '@/utils/fraction';
describe('searchListings', () => {
  const listings: CompactListing[] = [
    { id: 0, slug: 'pasta', title: 'Pasta', image: '/pasta.webp' },
    { id: 1, slug: 'chicken-curry', title: 'Chicken curry', image: '/chicken.webp' },
  ];
  const searchIndex: SearchIndex = {
    pasta: [0],
    chicken: [1],
    curry: [1],
  };
  it('returns empty results for blank queries', () => {
    expect(searchListings('', searchIndex, listings)).toEqual([]);
  });
  it('matches single keywords', () => {
    expect(searchListings('pasta', searchIndex, listings)).toEqual([listings[0]]);
  });
  it('intersects multiple keywords', () => {
    expect(searchListings('chicken curry', searchIndex, listings)).toEqual([listings[1]]);
  });
});
describe('toFraction', () => {
  it('formats whole numbers', () => {
    expect(toFraction(2)).toBe('2');
  });
  it('formats common fractions', () => {
    expect(toFraction(0.5)).toBe('½');
    expect(toFraction(1.5)).toBe('1½');
  });
});
