const btn = document.getElementById("btn");
const input = document.getElementById("input")


function run (n) {
    let arr = [0,1];
    for (let i = 2; i < n + 1; i++) {
        arr.push(arr[i-2] + arr[i-1])
    }
    return arr [n];
    
    // console.log(arr)
    }

    
btn.onclick = function fib (n) {
    if (n<2){
        return n
    }
    console.log(fib(n-1) + fib(n-2))
};
