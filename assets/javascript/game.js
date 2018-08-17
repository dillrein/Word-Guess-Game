// Variables
//--------------------------------------------
var rbcolors =["red", "orange", "yellow", "green", "blue", "violet"];
var colorchosen = "";
var lettersincolor = [];
var blanks = 0;
var gameboard = [];
var wrongletters = [];

var wins = 0;
var losses = 0;
var attemptsleft = 0;

//Functions
//----------------------------------------------
function start () {
    //rng to pick a color based off number of rbcolor string
    colorchosen = rbcolors[Math.floor(Math.random() * rbcolors.length)];

    lettersincolor = colorchosen.split("");


    console.log(colorchosen);
    console.log(lettersincolor);


}





//Main Process
//----------------------------------------------
start();