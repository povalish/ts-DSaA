import { Stack } from '../Stack';

export function matchDelimiters(expression: string): boolean {
  const openDelimiters = '({['.split('');
  const closeDelimiters = ')}]'.split('');
  const stackOpenDelimiters: Stack<string> = new Stack();
  let isCorrect = true;

  expression
    .split('')
    .forEach((symbol) => {
      // stop iterating if already
      // incorrect expression
      if (!isCorrect) { return; }

      if (openDelimiters.includes(symbol)) {
        stackOpenDelimiters.push(symbol);
      }

      if (closeDelimiters.includes(symbol)) {
        if (stackOpenDelimiters.isEmpty()) {
          isCorrect = false;
          return;
        }

        const lastOpenDelim = stackOpenDelimiters.pop()!;
        const openDelimIndex = openDelimiters.indexOf(lastOpenDelim);
        const symbolIndex = closeDelimiters.indexOf(symbol);

        if (openDelimIndex !== symbolIndex) {
          isCorrect = false;
        }
      }
    });

  return isCorrect && stackOpenDelimiters.isEmpty();
}
