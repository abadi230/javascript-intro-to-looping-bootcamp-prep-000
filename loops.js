// function forLoop(array){
// for (var i = 0; i<25; i++){
//   array.push(`I am ${i} strange loop${i === 1 ? '' : 's'}.`);
  
// }
//   return array
// }

// function whileLoop(n){
//   while (n !== 0){
//     for(n ; n > 0; n--){
//       console.log(n)
//     } 
    
//   }
//   return 'done'
// }

// var i = 0;

// function incrementVariable() {
//   i = i + 1;
//   return i;
// }



// function doWhileLoop(num){
//   do {
//   console.log("I run once regardless.");
//   } while (incrementVariable() < num + 1);
  
// }
/*Build a function forLoop. It takes an array as an argument. Start counting from 0, and, using a for loop, add a string to the array 25 times. But not just any string. If your i value is 1, add the string "I am 1 strange loop."; if your i value is anything else, add the string "I am ${i} strange loops.". (Remember flow control with if and else? And how do we interpolate i?) Then return the array.
1) loops
       forLoop(array)
         adds `"I am ${i} strange loop${i === 0 ? '' : 's'}."` to an array 25 times:
         */
function forLoop(arr){
  var count=25;
  for(let i = 0; i < count; i++){
    i === 1 ?  arr.push(`I am ${i} strange loop.`): arr.push(`I am ${i} strange loops.`)
  }
  return arr;
}

/* Create a function called whileLoop in loops.js. The function should take a number as an argument. Using a while loop, count down (using console.log) from the passed in number to 0. Then return the string 'done'
2) loops
       whileLoop(n)
         counts down from n to 0:
         */
         
function whileLoop(number){
  while(number > 0){
    number--
    console.log(number)
  }
}