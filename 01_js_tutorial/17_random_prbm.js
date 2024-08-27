//run at js compiler online

let num=Math.floor(Math.random()*100)
let num1=prompt("enter the number")
let cnt=0;
while(num1!=num){
    if(num1>num){
        num1=prompt("plzz enter lesser number ")
        cnt++
    }
    if(num1<num){
       num1=prompt("plzz enter big number")
        cnt++
    }
    
}
console.log("score is" +(100-cnt))