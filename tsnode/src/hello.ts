console.log('Hello World');

let text = 'Hello';

function double(x: number) {
    return 2 * x;
}

const result = double(41);
console.log(result);

function maxReducer(acc: number, next: number) {
   return next > max ? next : max;
}

let max = [2, 10, -10, 13, 56].reduce(maxReducer)

let array: string[] = [];

array.push('12', 'Aleck');
console.log(array);

class User {

    name: string;
    age: number;
    city:City
}

class City {
    name:string
}

let peter = new User();
peter.age = 20;
peter.name = 'Peter';

let newYork = new City();
newYork.name = 'New York';
peter.city = newYork;

let julia = {
    name: 'Julia',
    age: 24,
    city: {
        name: 'Toulouse'
    }
}

peter = julia;
