// code in built in functions // reverse string

// function solution(str) {
// let result = str.split("").reverse().join("")
// return result }



// code in loop // reverse string

function solution(str) {
  let result = "";
  for (i = 0; i < str.length; i++) {
    result += str[str.length - i - 1];
  }
  return result;
}


