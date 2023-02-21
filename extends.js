class TeamMember{
    name;
    location;
    constructor(name, location){
        this.name = name;
        this.location = location;
    };
    provideFeedback(){
        console.log(`${this.name} thank you for your feedback.`);
    }
}


class Instructor extends TeamMember {

  designation = "Web Instructor";
  team = "Web Instructor Team";
    constructor(name, location) {
    super(name, location);
  };
  startSupportSession(time) {
    console.log(`Start the support session ${time}`);
  }
  createQuiz(module) {
    console.log(`Please create quiz for module ${module}`);
  }
  provideFeedback() {
    console.log(`${this.name} thank you for your feedback.`);
  }
}

class Developer extends TeamMember{

  designation = "Web Developer";
  team = "Web Developer Team";
  constructor(name, location,tech) {
    super(name, location);
    this.tech = tech;
  }
  developerFeature(feature) {
    console.log(`Please develop the ${feature}`);
  }
  release(version) {
    console.log(`Please create quiz for the module ${version}`);
  }
  provideFeedback() {
    console.log(`${this.name} thank you for your feedback.`);
  }
}

class jobPlacement extends TeamMember {
  
  designation = "Job placement officer";
  team = "Job placement team";
  region;
  constructor(name, location, region) {
    super(name, location);
    this.region = region;
  }
  provideResume(feature) {
    console.log(`Please develop the ${feature}`);
  }
  prepareStudent(version) {
    console.log(`Please create quiz for the module ${version}`);
  }
  provideFeedback() {
    console.log(`${this.name} thank you for your feedback.`);
  }
}

const asif = new Instructor('Asif', 'Dhaka', );
console.log(asif);

const aziz = new Developer('Asif', 'Dhaka', 'Android Development');
console.log(aziz);

const shovan = new jobPlacement('Shovan', 'Dhaka', 'London');
console.log(shovan);