//store defined node in global variable
//call variable within function, modularizing functionality
//user must start quiz by clicking start exam//on-click into function where timer is started//logic programmed where time is decremented or incremented//function into with on click event, target button to do so

//"it's only entertainment!" (Jay-Z voice)
//fun prompt/confirm to engage user lightly
let WKQ = confirm("Are you ready for the mental gymnastics this quiz puts one through?");//I want to create a fun, enlightning experience.
let WKQ0 = prompt("Here's a primer: Please define the nature of reality (all things being relative of course)");

//teasing user a little bit, checking they type a little something
if (WKQ0.length <= 4) {
    alert("You didn't even try though!");
}

let i=0;//increments through wizQuests
let secondsLeft = 13;//dynamic timer, restartd for every question
let startQuiz = document.querySelector("#startQuiz");//tartgeted <button> trggrng timer
let hourGlass = document.querySelector("#displayTime");//div elmnt displaying timeDigits
let timer;//programmatic timer
let wizQuests = [
    {
        quest: "What's required in creating a globally used language like Javascript?",
        answers: [
            '1', '2', '3'
        ],
        correctIndex:0
    },
    {
        quest:"Is it Javascript that creates amazingly dynamic interfaces, or is it you that creates those interfaces?",
        answers:[
            '1', '2', '3'
        ],
        correctIndex:1
    },
    {
        quest:"Do you know how to create dynamic web apps without using JS?",
        answers:[
            '1', '2', '3'
        ],
        correctIndex:2
    },
    {
        quest:"What is the correct-index for this question property?",
        answers:[
            'one', 'two', 'three'
        ],
        correctIndex:-1
    }    
];

//function/clckEvnt to kick off quiz/timer, generate first quest/choices
function timeQuestTrggr() {
    hourGlass.textContent = secondsLeft + " seconds left";
    timer = setInterval(function () {
        secondsLeft--;
        hourGlass.textContent = secondsLeft + " seconds left";
        console.log(secondsLeft);

        if (secondsLeft<=0||i>=4){
            clearInterval(timer);//also need to clear when last ? is answered
            //sendMessage();
        }
    }, 1000);

    wizQuests.forEach(dynQuest);//prints content as user progresses through quiz
}
startQuiz.addEventListener("click",timeQuestTrggr)//timeTrggr() being triggered via user click (pew pew!)


//object of questions to dynamically be printed as user progresses through qstns

let questNode;//object of questions
let answersNode;//collection of answers
let h3DOM=document.querySelector("#dynQuest");//<h3> client side

//button elements
let userChoice=document.querySelector("#userChoice");
let bttnDOM=document.querySelector("#c1");
let bttnDOM0=document.querySelector("#c2");
let bttnDOM1=document.querySelector("#c3");

function dynQuest(){
      h3DOM.textContent=wizQuests.quest;
      h3DOM.appendChild() 
      console.log(h3DOM);
}


//triggering click events
// bttnDOM.addEventListener("click",function(){
//     answersNode.bttnDOM.textContent;
//     console.log(textContent);
// })

//this function will serve to print dynamically to page
//question nodes are manipulated on clicks
//choice nodes are updated on clicks
//update content using id's
//add click events to buttons
//inside event listen:evaluate user response
    //increment index
//ensure that user response mathces correct index property






























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



