
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
let tQuest=[
    {
        q1:"do you know what you've gotten yourself into?",
        q2:"what's a covert way to communicate to fellow programmers?",
        q3:"how long will this continue",
    },
    {
        a1:"doesn't seem like it",
        a2:"with the console",
        a3:"only time will tell"
    }
];//object for questions & answers//node of dynamic choices.//attach clickEvent so qstn changes after each selection, & available time is effected poitively or negatively.
console.log(tQuest.q1);

let trgtDiv=document.$("#firstDiv");//inject content to html
// trgtDiv.html()//perhaps a mutable value, changing questions.
 
