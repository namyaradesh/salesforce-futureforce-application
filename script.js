// global constants
//const clueHoldTime = 1000; //how long to hold each clue's light/sound
const cluePauseTime = 333; //how long to pause in between clues
const nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence

//Global Variables
var pattern = [2, 7, 4, 8, 2, 1, 3, 6, 5];
var progress = 0; 
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5;  //must be between 0.0 and 1.0
var guessCounter = 0;
var clueHoldTime = 1000;
var mistakes = 0;
//var intervalID;


function startGame(){
    //initialize game variables
    progress = 0;
    mistakes = 0;
    randomPattern();
    console.log(pattern);
    gamePlaying = true;
     /* intervalID = setTimeout(checkGuess(), 30000) */
  
    // swap the Start and Stop buttons
    document.getElementById("startBtn").classList.add("hidden");
    document.getElementById("stopBtn").classList.remove("hidden");
    playClueSequence();
  
}
/*
function checkGuess() {
    stopGame();
    alert("You took too long to guess. You lost.");  
}
*/
function randomPattern() {
  for (let i = 0; i < 8; i++) {
    pattern[i] = Math.floor(Math.random()*8 + 1);
  }
}

function stopGame(){
  gamePlaying = false;
  
  //swap the Start and Stop buttons
  document.getElementById("stopBtn").classList.add("hidden");
  document.getElementById("startBtn").classList.remove("hidden");
}

function lightButton(btn){
  document.getElementById("button"+btn).classList.add("lit")
}
function clearButton(btn){
  document.getElementById("button"+btn).classList.remove("lit")
}


function playSingleClue(btn){
  if(gamePlaying){
    lightButton(btn);
    playTone(btn,clueHoldTime);
    setTimeout(clearButton,clueHoldTime,btn);
  }
}

function playClueSequence(){
  guessCounter = 0;
  context.resume();
  clueHoldTime = clueHoldTime - 80;
  let delay = nextClueWaitTime; //set delay to initial wait time
  for(let i=0;i<=progress;i++){ // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue,delay,pattern[i]) // set a timeout to play that clue
    delay += clueHoldTime 
    delay += cluePauseTime;
  }
 // intervalID = setTimeout(checkGuess(), 30000); 
 // console.log("interval set"); 
}

function loseGame(){
  stopGame();
  alert("Game Over. You lost.");
}

function mistakeMade() {
  let chancesLeft = 3 - mistakes;
  alert("You made a mistake. You have " + chancesLeft + " chance(s) left.")
}

function winGame(){
  stopGame();
  alert("Game Over. You won!");
}

function guess(btn){
  console.log("user guessed: " + btn);
  if(!gamePlaying){
    return;
  }
  
  if(pattern[guessCounter] == btn){
    if(guessCounter == progress){
      if(progress == pattern.length - 1){
        //clearTimeout(intervalID);
        //console.log("interval cleared");
        winGame();
      }else{
        progress++;
        //clearTimeout(intervalID);
        //console.log("interval cleared");
        playClueSequence();
      }
    }else{
      guessCounter++;
    }
  }else{
    mistakes++;
    if (mistakes < 3) {
      mistakeMade();
    }
    else {
      //clearTimeout(intervalID);
      loseGame(); 
    }
  }
}







// Sound Synthesis Functions
const freqMap = {
  1: 261.6,
  2: 329.6,
  3: 392,
  4: 466.2,
  5: 100.7,
  6: 250.4,
  7: 500.8,
  8: 350.5
}
function playTone(btn,len){ 
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  context.resume()
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}
function startTone(btn){
  if(!tonePlaying){
    context.resume()
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    context.resume()
    tonePlaying = true
  }
}
function stopTone(){
  g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
  tonePlaying = false
}



// Page Initialization
// Init Sound Synthesizer
var AudioContext = window.AudioContext || window.webkitAudioContext 
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)