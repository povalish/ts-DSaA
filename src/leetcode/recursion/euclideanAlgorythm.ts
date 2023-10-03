function euclideanAlgorythm(a: number, b: number): number {
  if (a === 0) { return b; }
  if (b === 0) { return a; }

  const q = a % b;

  return euclideanAlgorythm(b, q);
}

export function main() {
  console.log(`NOD - 270, 192 -> ${euclideanAlgorythm(270, 192)}`);
}
