const user ={
    username : "Tufail",
    price : 100,
    welcomeMessage : function(){

   console.log(`${this.username} ,Welcome to the website`);

    }
}

user.welcomeMessage();
user.username = "Ali";
user.welcomeMessage();
console.log(this);



const chai2 = () =>{
    let username = "Tufail";
    console.log(this.username);
}
chai2()