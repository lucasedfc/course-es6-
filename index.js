let name = 'oscar';
let age = 32;


//es5
obj = { name: name, age: age};

//es6
obj2 = { name, age };

//console.log(obj);
console.log(obj2);

// Arrow FN

const names = [
    {name: 'Luke', age: 30},
    {name: 'Leia', age: 29}
]


//es5
let listOfNames = names.map( function (item)  {
    console.log(item.name);
});

//es6

let listOfNames2 = names.map( item => console.log(item.name));


/* const listOfNames3 = (name, age) => {
    ...
} */

// One element
/* const listOfNames4 = name => {
    ...
}
 */

const square = num => num * num;

// Promises

const helloPromise = () => {
    return new Promise((resolve, reject) => {
        if(true) {
            resolve('Hi!');
        } else {
            reject('Ups!');
        }
    });
}

helloPromise()
    .then(resp => console.log(resp))
    //.then(() => console.log('hello'))
    .catch(err => console.log(err));