


// function calcAge(year) {
//     console.log(2016-year);
//     console.log(this);
// }

// calcAge(1985);


let john = {
    name: `John`,
    yearOfBirth: 1990,
    calcAge: function () {
        console.log(this);
        console.log(2018-this.yearOfBirth);
        // function innerFunct() {
        //     console.log(this);            
        // }
        // innerFunct();
    }
};

john.calcAge(); 

let mike = {
    name: `Mike`,
    yearOfBirth: 1984,
}

mike.calcAge = john.calcAge;

mike.calcAge();