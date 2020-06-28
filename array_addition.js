let add = array => {
  let result = 0;
  for (let i = 0; i <= array.length - 1; i++) {
    result += array[i];
  }
  console.log(result);
};

let arr = [1, 2, 3, 4, 5, 6];
add(arr);
