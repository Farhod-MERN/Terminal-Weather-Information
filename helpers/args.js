const getArgs = (args) => {
  const res = {};
  
  const [first, second, ...rest] = args;

  rest.forEach((value, index, array) => {
    if (value.charAt(0) == "-") {  
      if (index == array.length - 1) { // agar array.length = 1 yoki index = 0
        res[value.substring(1)] = true;
      } else if (array[index + 1].charAt(0) != "-") {
        res[value.substring(1)] = array[index + 1]; // yani -s dan keyin nimadir yozzak , shuni s ga tenglaydi
      } else {
        res[value.substring(1)] = true;
      }
    }
  });
  return res
};

export default getArgs
