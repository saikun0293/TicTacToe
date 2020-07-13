let status=document.getElementById("status");
let blocks=document.querySelectorAll(".block");
let current="x";
let reset=document.getElementById("reset");


reset.addEventListener("click",handleReset)

// console.log(blocks);
gameOn=true;

// Adding event listeners
blocks.forEach(function(b){
    b.addEventListener("click",function(event){
        gamePlay(event.target);
    })
})

function handleReset(){
    current="x";

    blocks.forEach(function(block){
        block.classList.remove('x');
        block.classList.remove('o');
        block.classList.remove('winEffects');
    })

    status.innerHTML="X's Turn";

    gameOn=true;
}

function handleWinner(){
    if(current==="x"){
        status.innerHTML="X has won !";
    }else{
        status.innerHTML="O has won !";
    }
    gameOn=false;
    console.log("Winner");
}

function checkWinner(){
    let topLeft=blocks[0].classList[1],
        topMiddle=blocks[1].classList[1],
        topRight=blocks[2].classList[1],
        middleLeft=blocks[3].classList[1],
        middleMiddle=blocks[4].classList[1],
        middleRight=blocks[5].classList[1],
        bottomLeft=blocks[6].classList[1],
        bottomMiddle=blocks[7].classList[1],
        bottomRight=blocks[8].classList[1];

        //if all are not empty then game is tied
        if(topLeft && topLeft === topMiddle && topLeft === topRight) {
            handleWinner();
            blocks[0].classList.add('winEffects');
            blocks[1].classList.add('winEffects');
            blocks[2].classList.add('winEffects');
        } else if (middleLeft && middleLeft === middleMiddle && middleLeft === middleRight) {
            handleWinner();
            blocks[3].classList.add('winEffects');
            blocks[4].classList.add('winEffects');
            blocks[5].classList.add('winEffects');
        } else if (bottomLeft && bottomLeft === bottomMiddle && bottomLeft === bottomRight) {
            handleWinner();
            blocks[6].classList.add('winEffects');
            blocks[7].classList.add('winEffects');
            blocks[8].classList.add('winEffects');
        } else if (topLeft && topLeft === middleLeft && topLeft === bottomLeft) {
            handleWinner();
            blocks[0].classList.add('winEffects');
            blocks[3].classList.add('winEffects');
            blocks[6].classList.add('winEffects');
        } else if (topMiddle && topMiddle === middleMiddle && topMiddle === bottomMiddle) {
            handleWinner();
            blocks[1].classList.add('winEffects');
            blocks[4].classList.add('winEffects');
            blocks[7].classList.add('winEffects');
        } else if (topRight && topRight === middleRight && topRight === bottomRight) {
            handleWinner();
            blocks[2].classList.add('winEffects');
            blocks[5].classList.add('winEffects');
            blocks[8].classList.add('winEffects');
        } else if (topLeft && topLeft === middleMiddle && topLeft === bottomRight) {
            handleWinner();
            blocks[0].classList.add('winEffects');
            blocks[4].classList.add('winEffects');
            blocks[8].classList.add('winEffects');
        } else if (topRight && topRight === middleMiddle && topRight === bottomLeft) {
            handleWinner();
            blocks[2].classList.add('winEffects');
            blocks[4].classList.add('winEffects');
            blocks[6].classList.add('winEffects');
        }else if(topLeft && topMiddle && topRight && middleLeft && middleMiddle && middleRight && bottomLeft && bottomMiddle && bottomRight){
            status.innerHTML="It's a tie!"
            gameOn=false;
        }else{
            current=current==="x"?"o":"x";
            if(current==="x"){
                status.innerHTML="X's Turn";
            }else{
                status.innerHTML="O's Turn";
            }
        }
    
}

function gamePlay(target){
    let arr=target.classList;
    console.log(arr);
    if(!gameOn || arr[1]==="x" || arr[1]==="o"){
        return;
    }else{
        arr.add(current);
        checkWinner()
    }
}