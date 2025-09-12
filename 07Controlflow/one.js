const isuserLoggedIn = !true;
if (isuserLoggedIn) {
  console.log("Hello, World!");
}
if (!isuserLoggedIn) {
  console.log("Hello, boka");
}

if (3 == 3) {
  console.log("khandu");
} else {
  console.log("don");
}
const temp = 40;
if (temp < 40) {
  console.log("its is hot day");
} else if (temp == 40) {
  console.log("its is  a good day");
}
const balance = 1000;
// if (balance > 500) console.log("you have more than 1000rs");
// else console.log("you have less than 1000rs");
if (balance < 500) {
    console.log("less than");
}
else if (balance < 750) {
    console.log("less than 750");
}
else if (balance < 900) {
    console.log("less than 900");
}
else {
    console.log(" your balance is  1000rs");
}

const userLoggedIn = true;
const debitCard = true;
if (userLoggedIn && debitCard) {
    console.log("Allow to buy Courses");
}
else{
    console.log("chala ja bsdk");
}
const LoggedInFromgoogle = true;
const LoggedInFromemail = true;

if (LoggedInFromemail || LoggedInFromgoogle) {
    console.log("User logged in");
}