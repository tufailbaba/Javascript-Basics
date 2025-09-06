let myDate = new Date();
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toISOString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);

let myCreatedDate = new Date('2004-12-03');
console.log(myCreatedDate.toLocaleString());

let myTimestamp = Date.now();
console.log(myTimestamp);
console.log(myCreatedDate.getTime());
console.log(Math.floor (Date.now()/1000))

let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());

newDate.toLocaleString('default',{weekday:'long',
    timeZone:'Asia/Kolkata'
});

