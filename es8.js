// Object.entries

const data = {
    frontend: 'Luke',
    backend: 'Leia',
    design: 'Kinus',
}


//matriz
const entries = Object.entries(data);

console.log(entries);
console.log(entries.length);


// Object values
const values = Object.values(data);

console.log(values);


// pad
const string = 'Hello';

console.log(string.padStart(7, 'Hi'));
console.log(string.padEnd(12,' -----'));


// trailing comma
const obj = {
    name: 'Luke',
}

// async - await

const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (true)
        ? setTimeout(() => resolve('hello world'), 3000)
        : reject(new Error('Test Error'))
    });
}

const helloAsync = async () => {
    const hello = await helloWorld();
    console.log(hello);
}

helloAsync();

// handle error

const anotherFunction = async () => {
    try {
        const hello = await helloWorld();
        console.log(hello);
    } catch (error) {
        console.log(error);
    }
}

anotherFunction();