//Falsy Value are values  like 0,'',undefined,null,NaN
//true value any number that is not zero and empty string

//console.log(Boolean(o)); //not define

console.log(Boolean(undefined));
console.log(Boolean("Jonas"));
console.log(Boolean("")); //empty string is boolean
console.log(Boolean({})); //not defined

const money = 100;
if (money) {
  console.log("Don't spend it all");
} else {
  console.log(`you should get a Job!`);
}

let height;

if (height) {
  console.log("height is defined");
} else {
  console.log(`Yah!height is UNdefined`);
}

height = 123;
if (height) {
  console.log("height is defined");
} else {
  console.log(`Yah!height is UNdefined`);
}
height = 0;
if (height) {
  console.log("height is defined");
} else {
  console.log(`Yah!height is UNdefined`);
}
