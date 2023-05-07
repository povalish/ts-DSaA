// function isValid(s: string): boolean {
//   if (s.length === 1) { return false; }

//   const open = ['(', '[', '{'];
//   const close = [')', ']', '}'];
//   const brackets = [];

//   for (let i = 0; i < s.length; i++) {
//     if (open.includes(s[i])) {
//       brackets.push(s[i]);
//     }

//     if (close.includes(s[i])) {
//       const lastElement = brackets.pop();
//       const lastElementIndex = open.indexOf(lastElement || '');
//       const currentElementIndex = close.indexOf(s[i]);

//       if (lastElementIndex !== currentElementIndex) { return false; }
//     }
//   }

//   return brackets.length === 0;
// }

// function isValid(s: string): boolean {
//   if (s.length === 1) { return false; }

//   const brackets = [];
//   const allBrackets: Record<string, string> = {
//     ')': '(',
//     '}': '{',
//     ']': '[',
//   };

//   for (let i = 0; i < s.length; i++) {
//     if (['(', '{', '['].includes(s[i])) {
//       brackets.push(s[i]);
//     } else if (brackets.pop() !== allBrackets[s[i]]) {
//       return false;
//     }
//   }

//   return brackets.length === 0;
// }

function isValid(s: string): boolean {
  if (s.length % 2 === 1) { return false; }

  const brackets = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      brackets.push(')');
    } else if (s[i] === '{') {
      brackets.push('}');
    } else if (s[i] === '[') {
      brackets.push(']');
    } else if (brackets.pop() !== s[i]) {
      return false;
    }
  }

  return brackets.length === 0;
}


export function main() {
  const check1 = '({})';
  const check2 = '()[]{';
  const check3 = '(]';
  const check4 = '))';

  console.log(`is valid ${check1} - ${isValid(check1)}`);
  console.log(`is valid ${check2} - ${isValid(check2)}`);
  console.log(`is valid ${check3} - ${isValid(check3)}`);
  console.log(`is valid ${check4} - ${isValid(check4)}`);
}
