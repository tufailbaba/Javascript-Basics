function calculateCartPrice(...num1){
return num1
}

console.log(calculateCartPrice(200,400,500))

const user ={
    username : "Tufail",
    price :199
}
function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
    
}

handleObject(user)

const myNewArray = [200,400,500,600]

function returnFourthValue(getArray){
    return getArray[3]
}

console.log(returnFourthValue(myNewArray));
