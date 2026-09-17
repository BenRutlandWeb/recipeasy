declare global {
  interface Window {
    __recipeasyStorage?: Record<string, unknown>;
  }
}

function readStored(key: string): string | null {
  if (import.meta.env.SSR) {
    return null;
  }
  return localStorage.getItem(key);
}

export function readStorageList<T>(key: string, defaultValue: T[] = []): T[] {
  if (import.meta.env.SSR) {
    return defaultValue;
  }

  const bootstrapped = window.__recipeasyStorage?.[key];
  if (bootstrapped !== undefined) {
    return [...(bootstrapped as T[])];
  }

  const stored = readStored(key);
  if (!stored) {
    return defaultValue;
  }

  try {
    return [...(JSON.parse(stored) as T[])];
  } catch {
    return defaultValue;
  }
}

export function writeStorageList(key: string, value: unknown) {
  if (import.meta.env.SSR) {
    return;
  }

  localStorage.setItem(key, JSON.stringify(value));

  if (window.__recipeasyStorage) {
    window.__recipeasyStorage[key] = value;
  }
}
