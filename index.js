function startQuadratic() {
  const a = +window.prompt('Enter a:');
  const b = +window.prompt('Enter b:');
  const c = +window.prompt('Enter c:');

  const result = findQuadraticSolution(a, b, c);

  if (isNaN(result.x1)) {
    window.alert('Non quadratic');
  }
  else {
    result.x1 === null
      ? window.alert(`No solution`)
      : result.x1 === result.x2
        ? window.alert(`x1=x2=${result.x1}`)
        : window.alert(`x1=${result.x1}, x2=${result.x2}`);
  }
}

function findQuadraticSolution(a, b, c) {
  var x1 = NaN;
  var x2 = NaN;

  if (a) {
    const d = Math.pow(b, 2) - 4 * a * c;

    if (d > 0) {
      x1 = (-b + Math.sqrt(d)) / (2 * a);
      x2 = (-b - Math.sqrt(d)) / (2 * a);
    }
    else {
      d == 0
        ? x1 = x2 = -b / (2 * a)
        : x1 = x2 = null;
    }
  }

  return { x1, x2 };
}

function startFactorial() {
  const number = +window.prompt('Enter number:');

  const result = findFactorial(number);

  if (isNaN(result)) {
    window.alert('Is not number');
  }
  else {
    window.alert(`Factorial of ${number} - ${result}`);
  }
}

function findFactorial(number) {
  var result = NaN;

  if (!isNaN(number)) {
    result = number;

    for (let i = 2; i < number; i++) {
      result *= i;
    }
  }

  return result;
}

function startFibonacci() {
  const number = +window.prompt('Enter number:');

  const result = findFibonacci(number);

  if (!result) {
    window.alert('Is not number');
  }
  else {
    console.log(result.toString());
  }
}

function findFibonacci(number) {
  var arr;

  if (!isNaN(number)) {
    if (number == 0 || number == 1) {
      number == 0
        ? arr = [0]
        : arr = [0, 1];
    }
    else {
      arr = [0, 1];

      for (let i = 2; i <= number; i++) {
        arr.push(arr[i - 1] + arr[i - 2]);
      }
    }
  }

  return arr;
}

function buildPyramid() {
  const number = +window.prompt('Enter count of levels:');
  var resultString;

  for (let i = 0; i < number; i++) {
    resultString = getSymbolsString(number - i, ' ') + getSymbolsString(i * 2 + 1, '#');

    console.log(resultString);
  }
}

function getSymbolsString(spaceNumber, symbol) {
  var result = '';

  for (let i = 0; i < spaceNumber; i++) {
    result += symbol;
  }

  return result;
}