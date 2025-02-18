let boxes =document.querySelectorAll(".box");

let resetbtn =document.querySelector("#reset-btn");
let newgmbtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg =document.querySelector("#msg");

let turnO =true;//playerX,playerY
let count=0;
// let arr=["a","b","c"];

// //2d array
// let arr2=[["a","b"],["bn","an"]]

const winPatterns =[
  [0,1,2],
  [0,3,6],
  [0,4,8],
  [3,4,5],
  [6,7,8],
  [2,4,6],
  [1,4,7],
  [2,5,8]
];

const resetGame =()=>{
  turnO = true;
  count =0;
  enableboxes();
  msgContainer.classList.add("hide");

}

boxes.forEach((box)=>{
  box.addEventListener("click", () =>{
    console.log("Box was clicked");
    if (turnO ===true){
      box.innerText ="0"; //Player 0 turn
      box.classList.add("ocolor");
      turnO =false; //this means player 0 have used his turn
      
    }
    else {
      box.innerText ="X"; //player X turn
      box.classList.add("xcolor");
      turnO =true;//this means player X has player his turn
      
    }
    box.disabled =true;
    count ++;

    let iswinner =checkWinner();
    if(count === 9 && !iswinner){
      checkDraw();
    }
  });
});
const checkDraw = ()=>{
  msg.innerText = `Draw!`;
  msgContainer.classList.remove("hide");
  disableboxes();
}

const disableboxes =() =>{
  for(let box of boxes){
    box.disabled =true;

  }
}
const enableboxes =() =>{
  for(let box of boxes){
    box.disabled =false;
    box.innerText ="";

  }
}

const showWinner = (winner)=>{
  msg.innerText = `Congrats ,Winner is ${winner}`;
  msgContainer.classList.remove("hide");
  disableboxes();
}

const checkWinner =()=>{
  for(let pattern of winPatterns){
      let pos1val = boxes[pattern[0]].innerText;
      let pos2val = boxes[pattern[1]].innerText;
      let pos3val = boxes[pattern[2]].innerText;

      if(pos1val != "" && pos2val !="" && pos3val !=""){
        if(pos1val === pos2val && pos2val === pos3val){
          console.log("Winner");
          showWinner(pos1val);
          
        }
      }
    

  }
}



newgmbtn.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);