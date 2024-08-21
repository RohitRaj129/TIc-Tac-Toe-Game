let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#resetBtn");
let newGameBtn = document.querySelector("#newGameBtn");
let msgContainer = document.querySelector(".msgContainer");
let msg = document.querySelector("#msg");

let turnX = true; //if ture prints X if false prints O

const winPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(!box.disabled){
            if(turnX ){
                box.innerText = "X";
                turnX=false;
            }else{
                box.innerText = "O";
                turnX = true;
            }
            box.disabled = true;

        }
        checkWinner();
    })
})

const disableBtn = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
}

const enableBtn = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

const resetGame = () =>{
    turnX = true;
    enableBtn();
    msgContainer.classList.add("hide");
}

const showWinner = (winner) =>{
    msg.innerText = `Congratulations🎉, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBtn();
}

const showDraw = () => {
    msg.innerText = " It's a Draw🫱🏻‍🫲🏻";
    msgContainer.classList.remove("hide");
    disableBtn();
}

const checkWinner = () =>{
    let isDraw = true;

    for(let pattern of winPatterns){
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if(pos1val != "" && pos2val != "" && pos3val != ""){
            if(pos1val === pos2val && pos2val === pos3val){
                showWinner(pos1val);
            }
        }
    };

    boxes.forEach(box =>{
        if(box.innerText === ""){
            isDraw = false;
        }
    });

    if(isDraw){
        showDraw();
    }
}

newGameBtn.addEventListener("click", resetGame)
resetBtn.addEventListener("click", resetGame)