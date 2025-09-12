const userEmail = "example@example.com";
if (userEmail){
    console.log("Condition is truthy");
}else{
    console.log("Condition is falsy");
    
}
const emptyObj = {};
if (Object.keys(emptyObj).length === 0){
    console.log("Object is empty");
    
}
