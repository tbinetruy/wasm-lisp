function opAdd(a: i32, b: i32): i32 {
  return a + b;
}

function opSub(a: i32, b: i32): i32 {
  return a - b;
}

function opMul(a: i32, b: i32): i32 {
  return a * b;
}

function opDiv(a: i32, b: i32): i32 {
  return a / b;
}

function opModulo(a: i32, b: i32): i32 {
  return a % b;
}

export function evalE(ast: Array<string>): i32 {
  let result: i32 = 0;
  let opCode = ast[0].charCodeAt(0);
  let opFunc = opAdd;
  switch (opCode) {
    case 37: // '/'
      opFunc = opModulo;
      break;
    case 42: // '*'
      result = 1;
      opFunc = opMul;
      break;
    case 43: // '+'
      opFunc = opAdd;
      break;
    case 45: // '-'
      opFunc = opSub;
      break;
    case 47: // '/'
      opFunc = opDiv;
      break;
  }

  for (let i = 1; i < ast.length; i++) {
    result = opFunc(result, parseI32(ast[i]));
  }
  return result;
}
