//store defined node in global variable
//call variable within function, modularizing functionality
//user must start quiz by clicking start exam//on-click into function where timer is started//logic programmed where time is decremented or incremented//function into with on click event, target button to do so

let WKQ = confirm("Are you ready for the mental gymnastics this quiz puts one through?");//I want to create a fun, enlightning experience.
let WKQ0 = prompt("Here's a primer: Please define the nature of reality (all things being relative of course)");
if (WKQ0.length <= 4) {
    alert("You didn't even try though!");
}
let i;//engine
let secondsLeft = 5;
let startQuiz = document.querySelector("#startQuiz");//tartgeted <button>
let hourGlass = document.querySelector("#displayTime");
let timer;
//function to kick off quiz/timer
function countDown() {
    hourGlass.textContent = secondsLeft + " seconds left";
    timer = setInterval(function () {
        secondsLeft--;
        hourGlass.textContent = secondsLeft + " seconds left";
        console.log(secondsLeft);

        if (secondsLeft <= 0) {
            clearInterval(timer);//also need to clear when last ? is answered
            sendMessage();
        }
    }, 1000);
}
startQuiz.addEventListener("click", function () {
    //start timer
    //logic for right/wrong response
    countDown();
})

//this function will serve to print dynamically to page
//question nodes are manipulated on clicks
//choice nodes are updated on clicks
//radio <buttons> for user to select from
//hover dynamo
let wizQuests = [
    {
        quest: "Where do babies come from, be as technical as possible, just try not to be crude (my gosh)!",
        answers: [
            'one', 'two', 'three'
        ],
        correctIndex: 0
    },
    {
        quest:"How much can be done with just JS?",
        answers:[
            'one', 'two', 'three'
        ],
        correctIndex:1
    },
    {
        quest:"How much can be done with just JS?",
        answers:[
            'one', 'two', 'three'
        ],
        correctIndex:1
    },
    {
        quest:"How much can be done with just JS?",
        answers:[
            'one', 'two', 'three'
        ],
        correctIndex:1
    }    
];

function dynQuest(){
    wizQuests[i].quest;
    //update content using id's
    //add click events to buttons
    //inside event listen:evaluate user response
        //increment index
    //ensure that user response mathces correct index property
}































//target DOM elements for manipulation
    //create variables to store DOM elements for targeting
    //use variables for functioning


//global variables
// let tQuest=[//iterate through objct on click, store user selection for highscores.html//forEach() to loop through object of questions
    // {
        //let crrntQst=0;//increment to track user progress
        //let=[
        // {   qstn:"lorem",
            // choices:["",],
            // answr:"i"//particular value

//         }
//     ]
//         q1:"do you know what you've gotten yourself into?",
//         q2:"what's a covert way for communicating to fellow programmers?",
//         q3:"how long will this continue",//generates new question on evry clckEvnt
//     },
//     {
//         a1:"doesn't seem like it",//mult choice?
//         a2:"with the console",
//         a3:"only time will tell"
//     }
// ];//object for questions & answers//node of dynamic choices.//attach clickEvent so qstn changes after each selection, & available time is effected poitively or negatively.

// $("#quizQuests").html("<h3>is this how I'm to question things</h3>");//inject content to html
// // trgtDiv.html()//perhaps a mutable value, changing questions.
// let DOM=$("<div>");

// //create object for questions
// //object for answers
// DOM.append(clusterOfQuestions);//supposition

// let godLike=()=>{
//     $("#quizQuests").html("<h3>is this how I'm to question things</h3>");
// }



