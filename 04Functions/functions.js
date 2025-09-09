function sayMyName(){
    console.log("T");
console.log("u");
console.log("f");
console.log("a");
console.log("i");
console.log("l");

}

sayMyName();

function addTwoNumbers(num1, num2){
    console.log(  num1 + num2);
}

addTwoNumbers(10, 20);

function loginUserMessage(username){
    if(username === undefined){
        console.log("Please enter a username");
        return;
    }
    return `${username} just logged in`
}


console.log((loginUserMessage()));