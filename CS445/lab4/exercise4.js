  "use strict"
//   function fibonacci1(n,memo) {
//     memo = memo || {}
//     if (memo[n]) {
//         return memo[n]
//     }
//     if (n <= 1) {
//         return 1
//     }
//     return memo[n] = fibonacci1(n - 1, memo) + fibonacci1(n - 2, memo)
// }


function memoizer(fun){
    let cache = {}
    return function (n){
        if (cache[n] !== undefined ) {
          return cache[n]
        } else {
          let result = fun(n)
          cache[n] = result
          return result
        }
    }
}

function fibonacci2(n) {
    if (n <= 1) {
        return 1
    }
    return fibonacci2(n - 1) + fibonacci2(n - 2);
}


console.time("memo")
 const memo=memoizer(fibonacci2(50))
console.timeEnd("memo")
console.log("********   ****** *********")

console.time("regular");
fibonacci2(50);
console.timeEnd("regular");


//
function fib(n) {
    const memorize = {};
    
    function helper(n) {
    if (n in memorize) return memorize[n];
    if (n <= 1) return 1;
    return memorize[n] = helper(n - 1) + helper(n - 2);
    }
    
    return helper(n);
    }




    const fibonacciMemoFunction = memoizer(fibonacciRecursive)