//target DOM elements for manipulation
    //create variables to store DOM elements for targeting
    //use variables for functioning

//trigger dom 

//store questions inside array

let WKQ=confirm("are you ready for the mental gymnastics this quiz puts one through?");//I want to create a fun, enlightning experience
let WKQ0=prompt("here's a primer: please define the nature of reality (all things being relative of course)");//if input is less than 4char, alert('you didn't even try though...');
let prmpt1Fnctn=()=>{
    if(WKQ0.length<=4){
        //use modal
    }
}

let modal=()=>{
    // Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
};