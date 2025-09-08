const tinderUser = {};

tinderUser.id = "1234";
tinderUser.name = "Tufail";
tinderUser.isLoggedIn = false;

const regularUser = {
  email: "regularuser@example.com",

  "full name": {
    userfullname: {
      firstname: "Tufail",
      lastname: "Ahmad",
    },
  },
};

console.log(regularUser["full name"].userfullname.firstname);

const obj1 = { 1: "s", 2: "t" };
const obj2 = { 3: "a", 4: "u" };

const obj3 = Object.assign({}, obj1, obj2);

console.log(obj3);

const obj4 = { ...obj1, ...obj2 };

console.log(obj4);
console.log(Object.keys(obj4));
console.log(Object.values(obj4));
console.log(Object.entries(obj4));