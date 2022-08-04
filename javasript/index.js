const num1=Math.ceil(Math.random()*20);
const num2=Math.ceil(Math.random()*20);

const questionE1=document.getElementById("question");
const formE1=document.getElementById("form");
const inputE1=document.getElementById("input");
const scoreE1=document.getElementById("score");
const correctAns=num1*num2

questionE1.innerText=`What is ${num1} multiply by ${num2} ?`

let score=JSON.parse(localStorage.getItem("score"));
if(!score)
{
    score=0;
}
scoreE1.innerText=`score:${score}`

formE1.addEventListener("submit", ()=>{
    const userAns=+inputE1.value;
    if(userAns===correctAns)
    {
        score++;
        updateLocalStorage()
    }
    else
    {
        score--;
        updateLocalStorage()
    }

})



function updateLocalStorage()
{
       localStorage.setItem("score", JSON.stringify(score))
}