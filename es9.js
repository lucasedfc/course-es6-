// Operador Spread

const obj = {
    name: 'Luke',
    age: 30,
    country: 'AR'
};

let {country, ...all} = obj;

console.log(all);

//composition

const obj = {
    name: 'Luke',
    age: 30
}

const obj1 = {
    ...obj,
    country: 'AR'
}

console.log(obj1);

// promise finally

const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (true)
        ?  setTimeout(() => resolve('Hello world'), 3000) 
        : reject(new Error('Test Error'))
    });
}

helloWorld()
.then(resp => console.log(resp))
.catch(err => console.log(err))
.finally(() => console.log('finished'))

//regex to group

const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
const match = regexData.exec('2020-11-05');

const year = match[1]
const month = match[2]
const day = match[3]

console.log({year, month, day});