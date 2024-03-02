const fs = require('fs');
const prompt = msg => {
    fs.writeSync(1, String(msg));
    let s = '', buf = Buffer.alloc(1);
    while(buf[0] - 10 && buf[0] - 13)
      s += buf, fs.readSync(0, buf, 0, 1, 0);
    return s.slice(1);
  };

const def = prompt('Enter required equation: ');

function solveEquation(equation) {
    equation = equation.toString();
    let arr = equation.split(" ");
    let a = parseInt(arr[0]);
    let b = parseInt(arr[3] + arr[4]);
    let c = parseInt(arr[7] + arr[8]);
  
    let result = [];
  
    let b2 = b / 2;
    let sqD1 = Math.sqrt(b2 * b2 - a * c);
    result[0] = Math.round((-b2 + sqD1) / a);
    result[1] = Math.round((-b2 - sqD1) / a);
    
    result.sort((a,b) => (a - b));
    return result;
  }

console.log(solveEquation(def));