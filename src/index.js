module.exports = function check(str, bracketsConfig) {

  let arr = str.split('');
  let stack = [];
  let open = [];
  let close = [];

  for (let i = 0; i < bracketsConfig.length; i++) {
    const element = bracketsConfig[i];
    open = open.concat(element[0]);
    close = close.concat(element[1]);
  }

  for (let i = 0; i < arr.length; i++) {
    if (open.indexOf(arr[i]) > -1) {

      if (open.indexOf(arr[i]) === close.indexOf(arr[i]) && stack[stack.length - 1] === arr[i]) {
        stack.pop();
        continue;
      }
      stack.push(arr[i]);
    } else {
      if (close.indexOf(arr[i]) > -1) {
        let closeIndex = close.indexOf(arr[i]);
        let openIndex = open.indexOf(stack.pop());
        if (closeIndex != openIndex) {
          return false;
        }
      } else {
        return false;
      }
    }

  }

  if (stack.length === 0) {
    return true;
  } else {
    return false;
  }
}
