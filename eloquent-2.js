1.Looping a triangle
for(let a="#";a.length<8;a+="#")
console.log(a);

2.FIZZBUZZ
for (let number=1;number<=100;number=number+1) 
{if(number%5==0 && number%3==0){console.log("FizzBuzz");}
else if (number%3==0){console.log("Fizz");}
  else if(number%5==0){console.log("Buzz");}
 else {console.log(number);}
} 

3.Chessboard
let size = 8;

let board = "";

for (let y = 0; y < size; y++) {
  for (let x = 0; x < size; x++) {
    if ((x + y) % 2 == 0) {
      board += " ";
    } else {
      board += "#";
    }
  }
  board += "\n";
}

console.log(board);




