// let john = {
//     name : `John`,
//     yearOfBirth: 1990,
//     job: `teacher` 
// };


var Person = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
    };


Person.prototype.calculateAge = function() {
    console.log(2019 - this.yearOfBirth);
};


 let john = new Person(`John`, 1990, `teacher`);
 console.log(john);

 let jane = new Person(`Jane`, 1969, `designer`);
 let mark = new Person(`Mark`, 1948, `retired`);
 

 john.calculateAge();
 jane.calculateAge();
 mark.calculateAge();