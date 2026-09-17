export type SearchIndex = Record<string, number[]>;
export interface CompactListing {
  id: number;
  slug: string;
  title: string;
  image: string;
}
export function searchListings(
  query: string,
  searchIndex: SearchIndex,
  listings: CompactListing[]
): CompactListing[] {
  const searchWords = query
    .trim()
    .toLowerCase()
    .split(/[^a-zA-Z]+/)
    .filter(Boolean);
  if (searchWords.length === 0) {
    return [];
  }
  const wordMatches = searchWords.map((q) => {
    const matchedIds = new Set<number>();
    for (const [keyword, ids] of Object.entries(searchIndex)) {
      if (keyword.includes(q)) {
        ids.forEach((id) => matchedIds.add(id));
      }
    }
    return matchedIds;
  });
  if (wordMatches.some((set) => set.size === 0)) {
    return [];
  }
  wordMatches.sort((a, b) => a.size - b.size);
  let intersectedIds = Array.from(wordMatches[0]);
  for (let i = 1; i < wordMatches.length; i++) {
    const currentSet = wordMatches[i];
    intersectedIds = intersectedIds.filter((id) => currentSet.has(id));
  }
  const idToListing = new Map(listings.map((listing) => [listing.id, listing]));
  return intersectedIds
    .map((id) => idToListing.get(id) ?? null)
    .filter((listing): listing is CompactListing => listing !== null);
}
