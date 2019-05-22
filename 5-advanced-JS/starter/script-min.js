var john = {
    name: `John`,
    age: 26,
    job: `teacher`,
    presentation: function(style, timeOfDay) {
        if (style === `formal`) {
            console.log(`Good ${timeOfDay} ladies and gentelmen! I\'m a ${this.job} and I\'m ${this.age} years old.`);
            
        } else if (style = `friendly`) {
            console.log(`Hey sup. I\'m a ${this.job} and I\'m ${this.age} years old.`);
            
        }
    }
}


var emily = {
    name: `Emily`,
    age: 35,
    job: `designer`,
}




john.presentation(`formal`, `morning`);

john.presentation.call(emily, `friendly`, `afternoon`);

let johnFriendly = john.presentation.bind(john, `friendly`);

johnFriendly(`morning`);