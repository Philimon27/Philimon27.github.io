  "use strict"
  function fibonacci1(n,memo) {
    memo = memo || {}
    if (memo[n]) {
        return memo[n]
    }
    if (n <= 1) {
        return 1
    }
    return memo[n] = fibonacci1(n - 1, memo) + fibonacci1(n - 2, memo)
}

function fibonacci2(n) {
    if (n <= 1) {
        return 1
    }
    return fibonacci2(n - 1) + fibonacci2(n - 2);
}


console.time("memo")
fibonacci1(30)
console.timeEnd("memo")
console.log("********   ****** *********")

console.time("regular");
fibonacci2(30);
console.timeEnd("regular");


