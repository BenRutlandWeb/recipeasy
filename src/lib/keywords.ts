export function keywordToSlug(keyword: string): string {
  return keyword.toLowerCase().replace(/\s+/g, '-');
}
