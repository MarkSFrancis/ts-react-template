export function sum(...items: number[]): number {
  return items.reduce((prev, cur) => prev + cur);
}
