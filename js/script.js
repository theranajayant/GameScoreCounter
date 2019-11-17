//Max Points to play Default Value 5
var maxPoints=document.querySelector("#maxPoints");
//Min Points to play Default Value 5
var minPoints=Number(5);

//Max Point Board Id
var showMaxPoints=document.querySelector("#showMaxPoints");

//access to show result
var score1=document.querySelector("#score1");
var score2=document.querySelector("#score2");

//button valiable for event listening
var pb1=document.querySelector("#pb1");
var pb2=document.querySelector("#pb2");

//variable to store players score
var playerOneScore=0;
var playerTwoScore=0;


//showing CurrentGame Max Points
//#showing default value
showMaxPoints.textContent=maxPoints.value;
//#showing when max value changes
maxPoints.addEventListener("change",function(){
    showMaxPoints.textContent=maxPoints.value;
})



//listenig buttons

//listening To Player 1
pb1.addEventListener("click",function(){
    playerOneScore++
    score1.textContent=playerOneScore;
    checkWin();
})

//listening To Player 2
pb2.addEventListener("click",function(){
    playerTwoScore++
    score2.textContent=playerTwoScore;
    checkWin();
})


//listening To reset;
reset.addEventListener("click",function(){
    playerOneScore=0;
    playerTwoScore=0;
    score1.textContent=playerOneScore;
    score2.textContent=playerTwoScore;
    maxPoints.value=minPoints;
    document.querySelector("#showMaxPoints").textContent=minPoints;

})
//Making Player win if he scores first


//function to tell if game won
function checkWin(){
    if(playerOneScore>=parseInt(maxPoints.value)){
    alert("Player one Won");
    winReset();
    }
    
   else if(playerTwoScore>=parseInt(maxPoints.value)){
    alert("Player Two Won");
    winReset();
    }
    else{
        console.log("No one yet")

    }
}

//resetFunction to reset value after win
function winReset(){
    playerOneScore=0;
    playerTwoScore=0;
    score1.textContent=playerOneScore;
    score2.textContent=playerTwoScore;
}


