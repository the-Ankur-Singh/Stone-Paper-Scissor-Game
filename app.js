let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");

const genCompChoice = ()=>{
    const choices = ["rock", "paper", "Scissors"];
    //use  random function
    const randIdx=Math.floor(Math.random()*3);
    return choices[randIdx];
}

//showing winner on the display
const msg = document.querySelector("#msg");


//showing winner on console window
let showWinner = (userWin)=>{
    if(userWin){
        console.log("you Win");
        msg.innerText="You Win :)";
    }
    else{
        console.log("You lose");
        msg.innerText="You Lose :(";
    }
};


const drawGame=()=>{
    console.log("Game was draw");
    msg.innerText="it is a Draw :|";
};

const playGame = (userChoice)=>{
    console.log("user choice =",userChoice);
    //generate computer choice
    const compChoice = genCompChoice();
    console.log("comp choice=",compChoice); 
    
    if(userChoice===compChoice){
        //draw game condition
        drawGame();
    }else{
        let userWin = true; 
        if(userChoice==="rock"){
            //paper, Scissors
            userWin = compChoice==="paper"?false:true;
        }else if(userChoice==="paper"){
            //rock ,Scissors
            userWin = compChoice ==="scissor"?false:true;
        }else{
            //rock,paper
            userWin = compChoice==="rock"?false:true;
        }
        showWinner(userWin);
    }
};

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        // console.log("choice was clicked", choiceId);
        playGame(userChoice);
    });
});