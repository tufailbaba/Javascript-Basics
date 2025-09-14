const userEmail = "example@example.com";
if (userEmail){
    console.log("Condition is truthy");
}else{
    console.log("Condition is falsy");
    
}
const emptyObj = {};
if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
} else {
    console.log("Object is not empty");
}
 const userAge = 18;
 if (userAge >= 18) {
    console.log("User is an adult");    
    } else {    
    console.log("User is a minor");
    
    
 }