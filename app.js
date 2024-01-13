let boxes = document.querySelectorAll(".box"); // this stores array as .box matches with 9 of the buttons
let resetbtn = document.querySelector(".reset");
let winnermsg=document.querySelector(".winner");
let newgamebtn=document.querySelector(".newgame");
let result=document.querySelector(".result");
let game=document.querySelector(".main");
let player1=true;
let winpatterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]
boxes.forEach((val)=>{
    val.addEventListener("click",()=>{
        if(player1 == true){
            val.innerText="X";
            player1=false;
        }
        else{
            val.innerText="0";
            player1=true;
        }
        //this is disabled property for buttons
        val.disabled=true;
        checkwinner();
    })
})
let checkwinner = () => {
    for (let pattern of winpatterns) {
        let box1 = boxes[pattern[0]];
        let box2 = boxes[pattern[1]];
        let box3 = boxes[pattern[2]];

        if (box1.innerText !== "" && box2.innerText !== "" && box3.innerText !== "") {
            if (box1.innerText === box2.innerText && box2.innerText === box3.innerText) {
                showwinner(box1.innerText);
            }
        }
    }
}
let showwinner= (finalWinner)=>{
    winnermsg.innerText=`congratulations! winner is ${finalWinner}`;
    result.classList.remove("hide");
    game.classList.add("hide");
}
resetbtn.addEventListener("click",()=>{
    for(let box of boxes){
        box.innerText="";
        box.disabled=false;
    }
})
newgamebtn.addEventListener("click",()=>{
    result.classList.add("hide");
    game.classList.remove("hide");
    for(let box of boxes){
        box.innerText="";
        box.disabled=false;
    }
})
