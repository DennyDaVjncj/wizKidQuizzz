
//trigger dom 

//store questions inside array

let WKQ=confirm("are you ready for the mental gymnastics this quiz puts one through?");//I want to create a fun, enlightning experience.
let WKQ0=prompt("here's a primer: please define the nature of reality (all things being relative of course)");
let i;//engine
let usRspns=()=>{    
    for(i=4;i<=WKQ0.length;i++){
        alert("you didn't even try though...");
        //passedCheckpoint
    }


};
usRspns();

//target DOM elements for manipulation
    //create variables to store DOM elements for targeting
    //use variables for functioning


//global variables
let tQuest=[//iterate through objct on click, store user selection for highscores.html//forEach() to loop through object of questions
    {
        //let crrntQst=0;//increment to track user progress
        //let=[
        {   qstn:"lorem",
            choices:["",],
            answr:"i"//particular value

        }
    ]
        q1:"do you know what you've gotten yourself into?",
        q2:"what's a covert way for communicating to fellow programmers?",
        q3:"how long will this continue",//generates new question on evry clckEvnt
    },
    {
        a1:"doesn't seem like it",//mult choice?
        a2:"with the console",
        a3:"only time will tell"
    }
];//object for questions & answers//node of dynamic choices.//attach clickEvent so qstn changes after each selection, & available time is effected poitively or negatively.
console.log(tQuest.q1);

let DOM=$("#firstDiv");//inject content to html
// trgtDiv.html()//perhaps a mutable value, changing questions.
 
