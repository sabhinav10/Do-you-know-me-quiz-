
//require function is available inside node.js itself
const readLine  = require('readline-sync');
const name = readLine.question(`What is your name?\n`);

console.log(name);
// let is used since score should be  a varriable
let score = 0;

console.log(`********** WELCOME TO THE QUIZ ***********`);
const ans1 = readLine.question('Which city do i live in?\n');
if(ans1.toLocaleLowerCase().trim() === 'raipur'){
  score +=1;
  console.log("Congratulations!! You are correct");
  console.log("Current score",score);
}
else{
console.log("Oops!! You are Wrong");
console.log("Current score",score);
}


const ans2 = readLine.question('Which is my favourite sports?\n');
if(ans2.toLocaleLowerCase().trim() === 'boxing'){
  score +=1;
  console.log("Congratulations!! You are correct");
  console.log("Current score",score);
}
else{
console.log("Oops!! You are Wrong");
console.log("Current score",score);
}

const ans3 = readLine.question('Which is my favourite cuisine?\n');
if(ans3.toLocaleLowerCase().trim() === 'paneer'){
  score +=1;
  console.log("Congratulations!! You are correct");
  console.log("Current score",score);
}
else{
console.log("Oops!! You are Wrong");
console.log("Current score",score);
}

if(score === 3){
  console.log('You really know me well, your score is perfect',score);
}
else{
  console.log('Your final score is ',score);
}

