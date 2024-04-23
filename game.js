// alert("You are entered into the game")
// alert("Now chose one of three button to play")

// code for userinput
let userchoice = '';
// document.querySelector('#Bat').onclick=console.log(`You have choosed ${userchoice}`);
// document.querySelector('#Ball').onclick=console.log(`You have choosed ${userchoice}`);
// document.querySelector('#stamp').onclick=console.log(`You have choosed ${userchoice}`);


// this is for the choice of computer
let number = ''
let computerchoice = '';
let result = '';
let c = ``;
let d = ``;
let e = ``;

// creating function for randomnumbers

function randomnumbers() {
    number = Math.random() * 3;
    console.log(number);

    if (number > 0 && number <= 1) {
        computerchoice = 'Bat';
        console.log(`computer choosed ${computerchoice}`);
        return computerchoice;
    } else if (number > 1 && number <= 2) {
        computerchoice = 'ball';
        console.log(`computer choosed ${computerchoice}`);
        return computerchoice;
    } else if (number > 2 && number <= 3) {
        computerchoice = 'Stamp';
        console.log(`computer choosed ${computerchoice}`);
        return computerchoice;
    };

    return computerchoice;
}

// this is for the result
function computermove() {
    if (userchoice === "Bat") {
        if (computerchoice === 'Bat') {
            result = 'Tie';
            alert('Match get tie b/w the user and computer');
            return result;
        } else if (computerchoice === 'ball') {
            result = 'User';
            alert('User wins the Match');
            return result;
        } else if (computerchoice === 'Stamp') {
            result = 'Computer';
            alert('Computer wins the Match');
            return result;
        };


    } else if (userchoice === "Ball") {
        if (computerchoice === 'Bat') {
            result = 'computer';
            alert('computer wins the match');
            return result;
        } else if (computerchoice === 'ball') {
            result = 'Tie';
            alert('Match is Tie ');
            return result;
        } else if (computerchoice === 'Stamp') {
            result = 'User';
            alert('User wins the Match');
            return result;
        };
    } else if (userchoice === 'Stamp') {
        if (computerchoice === 'Bat') {
            result = 'User';
            alert('User wins the Match');
            return result;
        } else if (computerchoice === 'ball') {
            result = 'Computer';
            alert('Computer wins the Match');
            return result;
        } else if (computerchoice === 'Stamp') {
            result = 'Tie';
            alert('Match get tie b/w the user and computer');
            return result;

        };
    };

}



// now creating an object to calculate the score

let currentscore = localStorage.getItem('score');
let score;
resetscore(currentscore);

function resetscore(currentscore) {
    score = currentscore ? JSON.parse(currentscore) : {
        user: 0,
        computer: 0,
        tie: 0,
    };

    outcome();

}
    



function scorecard() {
    if (result === 'User') {
        c = score.user;
        c = c + 1;
        score.user = c;
    } else if (result === 'Computer') {
        d = score.computer;
        d = d + 1;
        score.computer = d;
    } else if (result === 'Tie') {
        e = score.tie;
        e = e + 1;
        score.tie = e;
    };
}

function outcome(userchoice, computerchoice, result) {
    localStorage.setItem('score', JSON.stringify(score));
    document.querySelector('#sbat').innerHTML = userchoice? `User choosed ${userchoice}`: '';


    document.querySelector('#sball').innerHTML = computerchoice? `Computer choosed               ${computerchoice}`:'';

    document.querySelector('#sstamp').innerHTML =  result ? `Winner of the match ${result}`: '';

    document.querySelector('#res').innerHTML = ` score of the user ${score.user}, score of the computer ${score.computer},  No.of the match get tied ${score.tie}`;




}




