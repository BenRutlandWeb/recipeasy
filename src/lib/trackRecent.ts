import { readStorageList, writeStorageList } from '@/lib/readStorage';

export function trackRecent(slug: string) {
  const recent = readStorageList<string>('recent');
  const index = recent.indexOf(slug);

  if (index !== -1) {
    recent.splice(index, 1);
  }

  recent.unshift(slug);
  writeStorageList('recent', recent.slice(0, 10));
}
