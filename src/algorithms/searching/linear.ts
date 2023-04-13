export const linearNative = (array: number[], target: number): number | null => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) {
      return array[i]!;
    }
  }

  return null;
};

export const linearJS = (array: number[], target: number): number | null => {
  const found = array.find((v) => v === target);
  return found || null;
};
