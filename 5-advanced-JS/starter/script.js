/*
--- Let's build a fun quiz game in the console! ---
1. Build a function constructor called Question to describe a question. A question should include:
a) question itself
b) the answers from which the player can choose the correct one (choose an adequate data structure here, array, object, etc.)
c) correct answer (I would use a number for this)

2. Create a couple of questions using the constructor

3. Store them all inside an array

4. Select one random question and log it on the console, together with the possible answers (each question should have a number) (Hint: write a method for the Question objects for this task).

5. Use the 'prompt' function to ask the user for the correct answer. The user should input the number of the correct answer such as you displayed it on Task 4.

6. Check if the answer is correct and print to the console whether the answer is correct ot nor (Hint: write another method for this).

7. Suppose this code would be a plugin for other programmers to use in their code. So make sure that all your code is private and doesn't interfere with the other programmers code (Hint: we learned a special technique to do exactly that).
*/


// Globals

function ranDom(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }
  


// Question constrcutor

let Question = function (question, answers, rightAnswer) {
    this.question = question;
    this.answers = answers;
    this.rightAnswer = rightAnswer;
};

// Question Methods

Question.prototype.displayQuestion = function () {
    console.log(this.question);
}

Question.prototype.displayAnswers = function() {
    for (let i = 0; i < this.answers.length; i++) {
        console.log(i + `. ` + this.answers[i]);
    };
}


Question.prototype.checkAnswer = function(ans) {
    ans = parseInt(ans);
    if (ans === this.rightAnswer) {
        console.log(`You are right, tis ${this.answers[ans]}`);
        console.log(scoreCounter());
    } else {
        console.log(`You are quite wrong, tis ${this.rightAnswer}`);
    }; 
};

let scoreCounter = scoreEnClosure();


   function scoreEnClosure() {
        let score = 0;
        function scoreCounter() {
            score++;
            return score;
        };
        return scoreCounter;
    };



// Pushing Questions to Array


let q1 = (new Question('Whats the design systems color?',['Yellow', 'Blue', 'Red', 'Tediuos'], 2));

let q2 = (new Question('What are the yard decorations?',['Chestnuts', 'Leafs',`Crayons` ,'Dunno'], 1));

let q3 = (new Question('Which pictures are missing?',['The car', 'The sea', 'The fish', `The airfield`], 3));

let questionArray =  [q1, q2, q3];

// Putting stuff together

function nextQuestion()  {
    let n = ranDom(0, questionArray.length - 1);
    questionArray[n].displayQuestion();
    questionArray[n].displayAnswers();
    let ans = prompt(`Enter your answer or type "exit" to exit`);

    if (ans !== `exit`) {
        questionArray[n].checkAnswer(ans);
        console.log(`- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - `);
        nextQuestion();
    } else {
        console.log('Game over');
    };
};

nextQuestion();

























/*
--- Expert level ---
8. After you display the result, display the next random question, so that the game never ends (Hint: write a function for this and call it right after displaying the result)

9. Be careful: after Task 8, the game literally never ends. So include the option to quit the game if the user writes 'exit' instead of the answer. In this case, DON'T call the function from task 8.

10. Track the user's score to make the game more fun! So each time an answer is correct, add 1 point to the score (Hint: I'm going to use the power of closures for this, but you don't have to, just do this with the tools you feel more comfortable at this point).

11. Display the score in the console. Use yet another method for this.
*/