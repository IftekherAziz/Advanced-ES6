// Class, constructor, method, create object from class:

/* ------------------------------------------------------------------------------ */

// syntatic sugar: (Class)
class Instructor{
    name;
    designation = 'Web Instructor';
    team = 'Web Team';
    location;
    constructor(name, location){
        this.name = name;
        this.location = location;
    }
    startSupportSession(time){
        console.log(`Start support session at ${time}`);
    }
    createQuiz(module){
        console.log(`Create quiz on ${module}`);
    }
}

// create object from class:
const aziz = new Instructor('Aziz Chy', 'Dhaka');
console.log(aziz);
aziz.startSupportSession('10:00 AM');
aziz.createQuiz(60);

// create another object from class:
const asif = new Instructor('Asif', 'Dhaka');
console.log(asif);
