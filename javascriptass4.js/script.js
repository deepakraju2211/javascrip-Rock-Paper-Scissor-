let Allimg=document.querySelectorAll('.imagcontainer img')
console.log(Allimg);

let userChoice;
let compChoice;

let userScore=0;
let compScore=0;

function computerfunc(){
    let arr=["rock","paper","scissor"];
    let var1=Math.floor(Math.random()*3);
    compChoice=arr[var1];
    return compChoice;
}
function gameImp(u){
    compChoice=computerfunc()

    alert( `user selected ${userChoice} and computer selected ${compChoice}`)
if(compChoice===userChoice){
        btn.innerHTML="***Game is Draw***";
    }
    else if(compChoice==='rock' && userchoice==='paper' || compChoice==='paper' && userChoice==='scissor' || compChoice==='scissor' && userChoice==='rock'){
        btn.innerHTML="***user is won***";
        userScore++;
        userscore.innerHTML=userScore;
    }
    else {
        btn.innerHTML="computer Won";
        compScore++;
        compscore.innerHTML=compScore; 

    }
    }

Allimg.forEach((i)=>{
      i.addEventListener('click',()=>{
        userChoice=i.id;
        gameImp(userChoice)
      })
})