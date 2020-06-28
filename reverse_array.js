let reverseArray = array => {
  let revArr = [];
  for (let i = 0; i < array.length; i++) {
    revArr.unshift(array[i]);
  }
  console.log(revArr);
};

reverseArray([0, 1, 2, 3, 4, 5, 6]);
