var x = 0;
var y = 1;
var next =1;
sum = 0
function fib(){

while(next <= 4000000){
  next = x +y;
  x = y;
  y = next;
  if(next%2 === 0){
    sum += next;
  }
}
console.log(sum)
}
fib()
