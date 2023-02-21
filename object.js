const users = [{id:1 , name: 'John', job:'doctor'}];

console.log(users[0]);
console.log(users[0].name); 

const data = {
    count: 5000,
    data:[
        {id:1 , name: 'John', job:'doctor'},
        {id:2 , name: 'Jane', job:'teacher'},       
    ]
}
// console.log(data.data);
// console.log(data.data[0].name, data.data[0].job);

const firstJob = data.data[0].job;
//console.log(firstJob);

const user = {
    id:5001,
    name:'Thomas Smith',
    address:{
        street: {
            number: 100, 
            name:'Main',
            flat: '5A',
            flor: 'second'
        },
        postOffice:'10001-CA',
        city:'New York'  
    }
}
// nested object:
const userFlat = user.address.street.flat;
console.log(userFlat);

// Optional chaining
const userFlor = user.address.stret?.flor;
console.log(userFlor);