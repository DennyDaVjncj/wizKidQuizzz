//store defined node in global variable
//call variable within function, modularizing functionality
//user must start quiz by clicking start exam//on-click into function where timer is started//logic programmed where time is decremented or incremented//function into with on click event, target button to do so

let WKQ=confirm("are you ready for the mental gymnastics this quiz puts one through?");//I want to create a fun, enlightning experience.
let WKQ0=prompt("here's a primer: please define the nature of reality (all things being relative of course)");
let i;//engine
let startQuiz=$("#startQuiz");//tartgeted <button>
let secondsLeft=5;
let hourGlass=$("displayTime");


//function to kick off quiz/timer
startQuiz.on("click",(e)=>{
    //start timer
    //logic for right/wrong response
    let timer=0;
        timer=setInterval(()=>{
        secondsLeft--;
        hourGlass.text(secondsLeft+" only a few seconds left");
        console.log(e);

        if(secondsLeft===0){
            clearInterval(timerInterval);
            sendMessage();
        }
    },1000);
    
})

//this function will serve to print dynamically to page
//question nodes are manipulated on clicks
//choice nodes are updated on clicks
//radio <buttons> for user to select from
//hover dynamo
let wizQuests=[
    "Where do babies come from, be as technical as possible, just try not to be crude (my gosh)!",
    "Where did JS come from?",
    "How much can be done with just JS?",
    "Do you think that Joe Biden or Trump have multiple versioins of themselves walking around?",
    "Honestly, are you willing to answer the previous question truthfully?"
];































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


 
