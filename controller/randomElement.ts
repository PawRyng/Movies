export function getRandomItems<T>(array: T[], numItems: number): T[] {
  // Używamy sortowania z losowym czynnikiem, aby przetasować tablicę
  return array.sort(() => Math.random() - 0.5).slice(0, numItems);
}
