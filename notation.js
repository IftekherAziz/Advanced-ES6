// JavaScript notation:

const student = {
    name: 'John',
    age: 25,
    isActive: true,
    class: '10th',
    marks:{
        math: 80,
        physics: 89,
        chemistry: 86,
        english: 90,
        science: 95
    },
}

// Dot Notation: 
const marks = student.marks;
console.log(marks);
const math = student.marks.math;
console.log('Marks in Math:',math);

// Dot Notation: (Bracket Notation)
const chemistry = student['marks']['chemistry'];
console.log('Marks in Chemistry:',chemistry);

// change variable name marks to subject
const subject = 'math';
const subjectMarks = student.marks[subject];
console.log(subjectMarks);