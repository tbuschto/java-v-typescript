/**
 * Type syntax, inferrence, const, string handling
 */

let bool: boolean = true && false;
bool = true;
console.log(bool);

let b: number = 0b1010101;
let s: number = 0XFFF;
let i: number = 2147483647;
let l: number = 2147483648;
let c: number = 'a'.charCodeAt(0);
console.log(l - b + c + s + i );

let f: number = 3.14;
let d: number = Math.PI;
console.log(f * d);

let nan: number = NaN;
let inf: number = Infinity;
console.log(nan + inf);

let str: string = 'foo' + 'bar' + c;
console.log(str === 'foobara'); // What's wrong here?
