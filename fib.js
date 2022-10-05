const btn = document.getElementById("btn");
const input = document.getElementById("input");
const arrayStart = [0, 1];
//Array(100).fill(1).map((n,i) => n + i)
console.log(arrayStart);
// console.log ((arr-1) + (arr-2))

const fibonacci = function (n1, n2) {
  const nextNumber = n1 + n2;
  
  if (nextNumber <= 50) {
    var newArray = arrayStart.push(nextNumber);
   
    fibonacci(arrayStart[arrayStart.length-2], arrayStart[arrayStart.length-1])
  } else {
    console.log(arrayStart, "stop");
  }

  return newArray;
};

fibonacci(arrayStart[0], arrayStart[1]);
