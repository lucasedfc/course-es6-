let array = [1,2,3, [1,2,3, [1,2,3]]];

//flat - return matriz with submatrix applaned

console.log(array.flat(2));

// flat Map

let array = [1,2,3,4,5];

console.log(array.flatMap(value => [value, value *2]));

// delete withe space of string

let hello = '             hello world';

console.log(hello);

console.log(hello.trimStart());

let hello = 'hello world     ';
console.log(hello);
console.log(hello.trimEnd());

// optional catch binding

try {
    
} catch {
    // error is available
}

// transform array to object

let  entries = [["name", "luke"], ["age", 30]];

console.log(Object.fromEntries(entries));

// symbol

let mySymbl = `My SYmbol`;

let symbol = Symbol(mySymbl);

console.log(symbol.description);