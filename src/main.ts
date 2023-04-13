import { binary } from './algorithms/searching/binary';

console.log('-----------------------');

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const target = 1;
const index = binary(array, target);

console.log('Source array: ', array);
console.log('Target: ', target);
console.log('Taarget index:', index);

console.log('-----------------------');
